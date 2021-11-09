"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphClientFactoryMock_1 = require("../../http/graph/GraphClientFactoryMock");
const MockHttpClient_1 = require("../../http/MockHttpClient");
class ServiceScopeMock {
    constructor(parent) {
        this.parent = parent;
        this._finished = false;
        this._pendingCallbacks = [];
        this.autocreating = false;
        this.registrations = {};
        this._registerService(MockHttpClient_1.MockHttpClient.httpClientServiceKey, MockHttpClient_1.MockHttpClient.httpClientServiceKey.defaultCreator(this));
        this._registerService(MockHttpClient_1.MockHttpClient.spHttpClientServiceKey, MockHttpClient_1.MockHttpClient.httpClientServiceKey.defaultCreator(this));
        this._registerService(GraphClientFactoryMock_1.GraphClientFactoryMock.graphClientFactoryMockKey, GraphClientFactoryMock_1.GraphClientFactoryMock.graphClientFactoryMockKey.defaultCreator(this));
    }
    static startNewRoot() {
        return new ServiceScopeMock();
    }
    startNewChild() {
        return new ServiceScopeMock(this);
    }
    ;
    getParent() {
        return this.parent;
    }
    createAndProvide(serviceKey, simpleServiceClass) {
        return this.provide(serviceKey, new simpleServiceClass(this));
    }
    provide(serviceKey, service) {
        if (this._finished) {
            throw new Error("ServiceScope is already finished");
        }
        if (this.registrations[serviceKey.id]) {
            throw new Error(`Service key: ${serviceKey.id} is already defined`);
        }
        this._registerService(serviceKey, service);
        return service;
    }
    _registerService(serviceKey, service) {
        this.registrations[serviceKey.id] = { serviceKey: serviceKey, service: service };
    }
    ;
    createDefaultAndProvide(serviceKey) {
        var service = serviceKey.defaultCreator(this);
        return this.provide(serviceKey, service);
    }
    ;
    finish() {
        this._finished = true;
    }
    _processPendingCallbacks() {
        var pendingCallbacks = this._pendingCallbacks;
        this._pendingCallbacks = [];
        for (var _i = 0, pendingCallbacks_1 = pendingCallbacks; _i < pendingCallbacks_1.length; _i++) {
            var pendingCallback = pendingCallbacks_1[_i];
            pendingCallback();
        }
    }
    whenFinished(callback) {
        callback();
    }
    consume(serviceKey) {
        var registration = this.registrations[serviceKey.id];
        if (registration) {
            return registration.service;
        }
        if (this.parent) {
            return this.parent.consume(serviceKey);
        }
        var autocreatedService = undefined;
        this.autocreating = true;
        try {
            autocreatedService = serviceKey.defaultCreator(this);
            this._registerService(serviceKey, autocreatedService);
        }
        finally {
            this.autocreating = false;
        }
        if (autocreatedService === undefined) {
            throw Error('ServiceKey must have an type');
        }
        this._processPendingCallbacks();
        return autocreatedService;
    }
}
exports.ServiceScopeMock = ServiceScopeMock;
//# sourceMappingURL=ServiceScopeMock.js.map