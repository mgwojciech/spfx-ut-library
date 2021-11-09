"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphRequestMock_1 = require("./GraphRequestMock");
class GraphClientMock {
    constructor() {
        this.graphRequests = [];
    }
    api(path, config) {
        let registeredRequestIndex = this.graphRequests.findIndex(x => x.path === path);
        if (registeredRequestIndex < 0) {
            let graphRequest = new GraphRequestMock_1.GraphRequestMock();
            graphRequest.path = path;
            graphRequest.config = config;
            this.registerGraphRequest(graphRequest);
            registeredRequestIndex = this.graphRequests.findIndex(x => x.path === path);
        }
        let request = this.graphRequests[registeredRequestIndex];
        request.config = config;
        return request;
    }
    registerGraphRequest(graphRequest) {
        let registeredRequestIndex = this.graphRequests.findIndex(x => x.path === graphRequest.path);
        if (registeredRequestIndex < 0) {
            if (this.onRequestExecutingCallback) {
                graphRequest.requestExecutingCallbacks.push(this.onRequestExecutingCallback);
            }
            this.graphRequests.push(graphRequest);
        }
        else {
            this.graphRequests[registeredRequestIndex] = graphRequest;
        }
    }
}
exports.GraphClientMock = GraphClientMock;
//# sourceMappingURL=GraphClientMock.js.map