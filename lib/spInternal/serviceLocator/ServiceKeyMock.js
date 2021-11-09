"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceKeyMock {
    constructor(id, name, defaultCreator) {
        this.id = id;
        this.name = name;
        this.defaultCreator = defaultCreator;
    }
    static create(name, serviceClass) {
        return ServiceKeyMock.createCustom(name, function (serviceScope) {
            return new serviceClass(serviceScope);
        });
    }
    static createCustom(name, defaultCreator) {
        ServiceKeyMock.registrationCounter++;
        ServiceKeyMock.registrationCounter = ServiceKeyMock.registrationCounter;
        var id = name + '_' + ServiceKeyMock.registrationCounter;
        return new ServiceKeyMock(id, name, defaultCreator);
    }
}
exports.ServiceKeyMock = ServiceKeyMock;
ServiceKeyMock.registrationCounter = 0;
//# sourceMappingURL=ServiceKeyMock.js.map