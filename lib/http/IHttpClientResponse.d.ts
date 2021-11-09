export interface IHttpClientResponse {
    json: () => Promise<any>;
    text: () => Promise<string>;
    ok: boolean;
    status: number;
}
