import { ServiceKeyMock } from "../spInternal/serviceLocator/ServiceKeyMock";
import { IMockResponse } from "./IMockResponse";
import { IMockHttpResponse, NotFoundResponse } from "./MockHttpResponse";

export class MockHttpClient {
    public Responses: IMockResponse[] = [];
    public OnResponseReturning?: (mockResponse: IMockResponse) => void;
    public OnRequestCalled?: (url: string, options?: any) => IMockResponse;
    public static httpClientServiceKey: ServiceKeyMock<MockHttpClient> = ServiceKeyMock.create("httpClient", MockHttpClient);
    public static spHttpClientServiceKey: ServiceKeyMock<MockHttpClient> = ServiceKeyMock.create("spHttpClient", MockHttpClient);
    constructor(serviceScope) {
    }
    public fetch(url: string, version: any, options?: any) {
        let response;
        if (this.OnRequestCalled) {
            response = this.OnRequestCalled(url, options);
        }
        if (!response) {
            response = this.findResponse(url, version, options);
        }
        if (!response) {
            return Promise.resolve(NotFoundResponse);
        }

        let mockedResponse = this.buildResponse(response, url);
        return Promise.resolve(mockedResponse);
    }
    public get<T>(url: string, version: any, options?: any): Promise<IMockHttpResponse<T>> {
        return this.fetch(url, version, options);
    }

    private buildResponse(response: IMockResponse, url: string) {
        let result = {
            status: response.status || 200,
            url: url,
            ok: response.ok || true,
            json: () => { return Promise.resolve(JSON.parse(response.response)); },
            text: () => { return Promise.resolve(response.response); },
            clone: () => { return result }
        };

        return result;
    }

    public post<T>(url: string, version: any, options?: any): Promise<IMockHttpResponse<T>> {
        return this.fetch(url, version, options);
    }
    /**
     * Adds response to known responses list
     * @param mockResponse the response to be added
     */
    public registerResponse(mockResponse: IMockResponse) {
        this.Responses.push(mockResponse);
    }
    public findResponse(url: string, version: any, options?: any): IMockResponse {
        let responses = this.Responses.filter(resp => resp.url === url);
        let response = responses[0];
        if (options && options.body) {
            response = responses.filter(resp => resp.requestBody == options.body || !resp.requestBody)[0];
        }
        if (response) {
            if (this.OnResponseReturning) {
                this.OnResponseReturning(response);
            }
            return response;
        }
        else {
            return null;
        }
    }
}