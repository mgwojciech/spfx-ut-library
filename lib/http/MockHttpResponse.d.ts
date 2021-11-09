export interface IMockHttpResponse<T> {
    ok: boolean;
    status: number;
    statusText?: string;
    url?: string;
    text: () => Promise<string>;
    json: () => Promise<T>;
    clone: () => IMockHttpResponse<T>;
}
export declare const NotFoundResponse: IMockHttpResponse<any>;
