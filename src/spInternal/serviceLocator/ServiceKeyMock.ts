import { ServiceScopeMock } from "./ServiceScopeMock";

export class ServiceKeyMock<T>{
    private static registrationCounter = 0;
    constructor(public id: string, public name: string, public defaultCreator: (serviceScope: ServiceScopeMock) => any) {
    }
    public static create<T>(name: string, serviceClass: {
        new (serviceScope: ServiceScopeMock): T;
    }): ServiceKeyMock<T> {
        return ServiceKeyMock.createCustom(name, function (serviceScope) {
            return new serviceClass(serviceScope);
        });
    }
    public static createCustom<T>(name, defaultCreator): ServiceKeyMock<T> {
        ServiceKeyMock.registrationCounter++;
        ServiceKeyMock.registrationCounter = ServiceKeyMock.registrationCounter;
        var id = name + '_' + ServiceKeyMock.registrationCounter;
        return new ServiceKeyMock(id, name, defaultCreator);
    }
}