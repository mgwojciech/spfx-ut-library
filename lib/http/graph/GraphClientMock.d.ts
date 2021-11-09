import { GraphRequestMock } from "./GraphRequestMock";
export declare class GraphClientMock {
    protected graphRequests: GraphRequestMock[];
    onRequestExecutingCallback?: (graphRequest: GraphRequestMock) => any;
    constructor();
    api(path: string, config?: any): GraphRequestMock;
    registerGraphRequest(graphRequest: GraphRequestMock): void;
}
