import { ServiceScopeMock } from "./ServiceScopeMock";
export declare class ServiceKeyMock<T> {
    id: string;
    name: string;
    defaultCreator: (serviceScope: ServiceScopeMock) => any;
    private static registrationCounter;
    constructor(id: string, name: string, defaultCreator: (serviceScope: ServiceScopeMock) => any);
    static create<T>(name: string, serviceClass: {
        new (serviceScope: ServiceScopeMock): T;
    }): ServiceKeyMock<T>;
    static createCustom<T>(name: any, defaultCreator: any): ServiceKeyMock<T>;
}
