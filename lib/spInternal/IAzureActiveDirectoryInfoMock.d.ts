import { Guid } from "../helpers/Guid";
export interface IAzureActiveDirectoryInfoMock {
    tenantId: string;
    instanceUrl: string;
    userId: string;
}
export declare class AzureActiveDirectoryInfoMock {
    protected data: IAzureActiveDirectoryInfoMock;
    private _instanceUrl;
    private _tenantId;
    private _userId;
    constructor(data: IAzureActiveDirectoryInfoMock);
    _serialize(): IAzureActiveDirectoryInfoMock;
    readonly instanceUrl: string;
    readonly tenantId: Guid;
    readonly userId: Guid;
    private _validate;
}
