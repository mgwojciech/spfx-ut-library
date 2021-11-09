export declare class GraphRequestMock {
    path: string;
    config: any;
    response: any;
    requestExecutingCallbacks: Array<(request: GraphRequestMock) => any>;
    headers: Map<string, string>;
    header(name: string, value: string): GraphRequestMock;
    get(): Promise<any>;
}
