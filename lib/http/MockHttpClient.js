"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceKeyMock_1 = require("../spInternal/serviceLocator/ServiceKeyMock");
const MockHttpResponse_1 = require("./MockHttpResponse");
class MockHttpClient {
    constructor(serviceScope) {
        this.Responses = [];
    }
    fetch(url, version, options) {
        let response;
        if (this.OnRequestCalled) {
            response = this.OnRequestCalled(url, options);
        }
        if (!response) {
            response = this.findResponse(url, version, options);
        }
        if (!response) {
            return Promise.resolve(MockHttpResponse_1.NotFoundResponse);
        }
        let mockedResponse = this.buildResponse(response, url);
        return Promise.resolve(mockedResponse);
    }
    get(url, version, options) {
        return this.fetch(url, version, options);
    }
    buildResponse(response, url) {
        let result = {
            status: response.status || 200,
            url: url,
            ok: response.ok || true,
            json: () => { return Promise.resolve(JSON.parse(response.response)); },
            text: () => { return Promise.resolve(response.response); },
            clone: () => { return result; }
        };
        return result;
    }
    post(url, version, options) {
        return this.fetch(url, version, options);
    }
    /**
     * Adds response to known responses list
     * @param mockResponse the response to be added
     */
    registerResponse(mockResponse) {
        this.Responses.push(mockResponse);
    }
    findResponse(url, version, options) {
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
exports.MockHttpClient = MockHttpClient;
MockHttpClient.httpClientServiceKey = ServiceKeyMock_1.ServiceKeyMock.create("httpClient", MockHttpClient);
MockHttpClient.spHttpClientServiceKey = ServiceKeyMock_1.ServiceKeyMock.create("spHttpClient", MockHttpClient);
//# sourceMappingURL=MockHttpClient.js.map