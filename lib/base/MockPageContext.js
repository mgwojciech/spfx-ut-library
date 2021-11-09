"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guid_1 = require("../helpers/Guid");
const SPPermissionMock_1 = require("../spInternal/SPPermissionMock");
const IAzureActiveDirectoryInfoMock_1 = require("../spInternal/IAzureActiveDirectoryInfoMock");
class MockPageContext {
    constructor() {
        this.aadInfo = new IAzureActiveDirectoryInfoMock_1.AzureActiveDirectoryInfoMock({
            tenantId: "1611080b-c1dd-41eb-bc7d-36749efae915",
            instanceUrl: "https://contoso.sharepoint.com",
            userId: "2611080b-c1dd-41eb-bc7d-36749efae915",
        });
        this.cultureInfo = {
            currentCultureName: "en-US",
            currentUICultureName: "en-US",
            isRightToLeft: false
        };
        this.list = {
            id: new Guid_1.Guid("3611080b-c1dd-41eb-bc7d-36749efae915"),
            permissions: SPPermissionMock_1.SPPermissionMock.fullMask,
            serverRelativeUrl: "/sites/test-site/Shared Documents/",
            title: "Shared Documents"
        };
        this.listItem = {
            id: 1
        };
        this.site = {
            absoluteUrl: "https://contoso.sharepoint.com/sites/test-site",
            cdnPrefix: "https://contoso.sharepoint.com",
            classification: "",
            correlationId: "",
            group: {
                id: "1611080b-c1dd-41eb-bc7d-36749efae915",
            },
            id: new Guid_1.Guid("1611080b-c1dd-41eb-bc7d-36749efae915"),
            isNoScriptEnabled: false,
            recycleBinItemCount: 0,
            serverRelativeUrl: "/sites/test-site",
            serverRequestPath: "/sites/test-site",
            sitePagesEnabled: false
        };
        this.user = {
            displayName: "John Doe",
            email: "john.doe@contoso.com",
            isAnonymousGuestUser: false,
            isExternalGuestUser: false,
            loginName: "john.doe@contoso.com",
            preferUserTimeZone: true
        };
        this.web = {
            absoluteUrl: "https://contoso.sharepoint.com/sites/test-site",
            id: new Guid_1.Guid("2611080b-c1dd-41eb-bc7d-36749efae915"),
            isAppWeb: false,
            language: 1033,
            languageName: "en-us",
            logoUrl: "https://contoso.sharepoint.com/sites/test-site/SiteAssets/logo.png",
            permissions: SPPermissionMock_1.SPPermissionMock.fullMask,
            serverRelativeUrl: "/sites/test-site",
            templateName: "STS#1",
            title: "Test Site",
            description: "",
        };
        this.searchQuery = "";
        this.isInitialized = true;
    }
    initialize(options, legacyPageContext) {
        this.list = options.list;
        this.listItem = options.listItem;
        this.site = options.site;
        this.user = options.user;
        this.web = options.web;
        this.legacyPageContext = legacyPageContext;
        this.isInitialized = true;
    }
    serialize() {
        return {
            aadInfo: this.aadInfo,
            cultureInfo: this.cultureInfo,
            list: this.list,
            listItem: this.listItem,
            site: this.site,
            user: this.user,
            web: this.web
        };
    }
    _setSearchQuery(query) {
        this.searchQuery = query;
    }
}
exports.MockPageContext = MockPageContext;
//# sourceMappingURL=MockPageContext.js.map