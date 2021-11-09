export class GraphRequestMock {
    public path: string;
    public config: any;
    public response: any;
    public requestExecutingCallbacks: Array<(request: GraphRequestMock) => any> = [];
    public headers: Map<string, string> = new Map<string, string>();

    public header(name: string, value: string): GraphRequestMock {
        this.headers.set(name, value);
        return this;
    }
    public get(): Promise<any> {
        let response = {};
        if (this.requestExecutingCallbacks) {
            this.requestExecutingCallbacks.every(callback => {
                let temp = callback(this);
                if (temp) {
                    response = temp;
                }
            });
        }
        if (response) {
            return Promise.resolve(response);
        }
        return Promise.resolve(this.response);
    }
}