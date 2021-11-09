export interface IMockHttpResponse<T>{
    ok: boolean;
    status: number;
    statusText?: string;
    url?: string;
    text: () => Promise<string>;
    json: () => Promise<T>;
    clone: ()=> IMockHttpResponse<T>;
}
export const NotFoundResponse: IMockHttpResponse<any> = {
    ok: false,
    status: 404,
    statusText: "Not Found",
    text: () => Promise.resolve("Not Found"),
    json: () => Promise.reject(new Error("Not Found")),
    clone: () => NotFoundResponse
};