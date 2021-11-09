import { ServiceKeyMock } from "./ServiceKeyMock";
export declare class ServiceScopeMock {
    parent?: ServiceScopeMock;
    private _finished;
    registrations: any;
    _pendingCallbacks: any[];
    autocreating: boolean;
    constructor(parent?: ServiceScopeMock);
    static startNewRoot(): ServiceScopeMock;
    startNewChild(): ServiceScopeMock;
    getParent(): ServiceScopeMock;
    createAndProvide<T>(serviceKey: ServiceKeyMock<T>, simpleServiceClass: {
        new (serviceScope: ServiceScopeMock): T;
    }): T;
    provide<T>(serviceKey: ServiceKeyMock<T>, service: T): T;
    _registerService(serviceKey: any, service: any): void;
    createDefaultAndProvide<T>(serviceKey: ServiceKeyMock<T>): any;
    finish(): void;
    _processPendingCallbacks(): void;
    whenFinished(callback: any): void;
    consume(serviceKey: any): any;
}
