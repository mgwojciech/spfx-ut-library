"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceKeyMock_1 = require("../../spInternal/serviceLocator/ServiceKeyMock");
const GraphClientMock_1 = require("./GraphClientMock");
class GraphClientFactoryMock {
    constructor() {
        this.mockClient = new GraphClientMock_1.GraphClientMock();
    }
    ;
    getClient() {
        return Promise.resolve(this.mockClient);
    }
}
exports.GraphClientFactoryMock = GraphClientFactoryMock;
GraphClientFactoryMock.graphClientFactoryMockKey = ServiceKeyMock_1.ServiceKeyMock.create("graphClientFactory", GraphClientFactoryMock);
//# sourceMappingURL=GraphClientFactoryMock.js.map