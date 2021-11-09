"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guid_1 = require("../helpers/Guid");
class AzureActiveDirectoryInfoMock {
    constructor(data) {
        this.data = data;
        this._instanceUrl = data.instanceUrl;
        this._tenantId = new Guid_1.Guid(data.tenantId);
        this._userId = new Guid_1.Guid(data.userId);
    }
    _serialize() {
        return this.data;
    }
    get instanceUrl() {
        return this._instanceUrl;
    }
    get tenantId() {
        return this._tenantId;
    }
    ;
    get userId() {
        return this._userId;
    }
    _validate() {
    }
}
exports.AzureActiveDirectoryInfoMock = AzureActiveDirectoryInfoMock;
//# sourceMappingURL=IAzureActiveDirectoryInfoMock.js.map