import { IHttpClientResponse } from "./IHttpClientResponse";
export interface IHttpClient {
    get(url: string, configuration?: any, options?: RequestInit): Promise<IHttpClientResponse>;
    post(url: string, configuration?: any, options?: RequestInit): Promise<IHttpClientResponse>;
    fetch(url: string, configuration?: any, options?: RequestInit): Promise<IHttpClientResponse>;
}
