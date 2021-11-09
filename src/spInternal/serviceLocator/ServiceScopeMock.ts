import { GraphClientFactoryMock } from "../../http/graph/GraphClientFactoryMock";
import { MockHttpClient } from "../../http/MockHttpClient";
import { ServiceKeyMock } from "./ServiceKeyMock";

export class ServiceScopeMock {
    private _finished = false;
    public registrations;
    public _pendingCallbacks = [];
    public autocreating = false;
    constructor(public parent?: ServiceScopeMock) {
        this.registrations = {};
        this._registerService(MockHttpClient.httpClientServiceKey, MockHttpClient.httpClientServiceKey.defaultCreator(this));
        this._registerService(MockHttpClient.spHttpClientServiceKey, MockHttpClient.httpClientServiceKey.defaultCreator(this));
        this._registerService(GraphClientFactoryMock.graphClientFactoryMockKey, GraphClientFactoryMock.graphClientFactoryMockKey.defaultCreator(this));
    }
    public static startNewRoot(): ServiceScopeMock {
        return new ServiceScopeMock();
    }
    public startNewChild() {
        return new ServiceScopeMock(this);
    };
    public getParent(): ServiceScopeMock {
        return this.parent;
    }
    public createAndProvide<T>(serviceKey: ServiceKeyMock<T>, simpleServiceClass: {
        new(serviceScope: ServiceScopeMock): T;
    }): T {
        return this.provide(serviceKey, new simpleServiceClass(this));
    }
    public provide<T>(serviceKey: ServiceKeyMock<T>, service: T): T {
        if (this._finished) {
            throw new Error("ServiceScope is already finished");
        }
        if (this.registrations[serviceKey.id]) {
            throw new Error(`Service key: ${serviceKey.id} is already defined`);
        }
        this._registerService(serviceKey, service);
        return service;
    }
    public _registerService(serviceKey, service) {
        this.registrations[serviceKey.id] = { serviceKey: serviceKey, service: service };
    };
    public createDefaultAndProvide<T>(serviceKey: ServiceKeyMock<T>) {
        var service = serviceKey.defaultCreator(this);
        return this.provide(serviceKey, service);
    };
    public finish() {
        this._finished = true;
    }
    public _processPendingCallbacks() {
        var pendingCallbacks = this._pendingCallbacks;
        this._pendingCallbacks = [];
        for (var _i = 0, pendingCallbacks_1 = pendingCallbacks; _i < pendingCallbacks_1.length; _i++) {
            var pendingCallback = pendingCallbacks_1[_i];
            pendingCallback();
        }
    }
    public whenFinished(callback) {
        callback();
    }
    public consume(serviceKey) {
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