import { ServiceKeyMock } from "../spInternal/serviceLocator/ServiceKeyMock";
import { IMockResponse } from "./IMockResponse";
import { IMockHttpResponse } from "./MockHttpResponse";
export declare class MockHttpClient {
    Responses: IMockResponse[];
    OnResponseReturning?: (mockResponse: IMockResponse) => void;
    OnRequestCalled?: (url: string, options?: any) => IMockResponse;
    static httpClientServiceKey: ServiceKeyMock<MockHttpClient>;
    static spHttpClientServiceKey: ServiceKeyMock<MockHttpClient>;
    constructor(serviceScope: any);
    fetch(url: string, version: any, options?: any): Promise<IMockHttpResponse<any>> | Promise<{
        status: number;
        url: string;
        ok: boolean;
        json: () => Promise<any>;
        text: () => Promise<string>;
        clone: () => any;
    }>;
    get<T>(url: string, version: any, options?: any): Promise<IMockHttpResponse<T>>;
    private buildResponse;
    post<T>(url: string, version: any, options?: any): Promise<IMockHttpResponse<T>>;
    /**
     * Adds response to known responses list
     * @param mockResponse the response to be added
     */
    registerResponse(mockResponse: IMockResponse): void;
    findResponse(url: string, version: any, options?: any): IMockResponse;
}
