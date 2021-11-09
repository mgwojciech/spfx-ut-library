import { Guid } from "../helpers/Guid";

export interface IAzureActiveDirectoryInfoMock {
    tenantId: string;
    instanceUrl: string;
    userId: string;
}

export class AzureActiveDirectoryInfoMock {
    private _instanceUrl: string;
    private _tenantId: Guid;
    private _userId: Guid;
    constructor(protected data: IAzureActiveDirectoryInfoMock) {
        this._instanceUrl = data.instanceUrl;
        this._tenantId = new Guid(data.tenantId);
        this._userId = new Guid(data.userId);
    }
    public _serialize(): IAzureActiveDirectoryInfoMock {
        return this.data;
    }
    get instanceUrl(){
        return this._instanceUrl
    }
    get tenantId(){
        return this._tenantId;
    };
    get userId(){
        return this._userId;
    }
    private _validate(){
    }
}