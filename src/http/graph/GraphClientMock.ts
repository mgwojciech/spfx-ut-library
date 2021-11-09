import { GraphRequestMock } from "./GraphRequestMock";

export class GraphClientMock {
    protected graphRequests: GraphRequestMock[] = []
    public onRequestExecutingCallback?: (graphRequest: GraphRequestMock) => any;
    constructor() {

    }
    public api(path: string, config?: any) {
        let registeredRequestIndex = this.graphRequests.findIndex(x => x.path === path);
        if (registeredRequestIndex < 0) {
            let graphRequest = new GraphRequestMock();
            graphRequest.path = path;
            graphRequest.config = config;
            this.registerGraphRequest(graphRequest);
            registeredRequestIndex = this.graphRequests.findIndex(x => x.path === path);
        }
        let request = this.graphRequests[registeredRequestIndex];
        request.config = config;
        return request;
    }
    public registerGraphRequest(graphRequest: GraphRequestMock) {
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