import { Guid } from "../helpers/Guid";
import { IPage } from "../spInternal/IPage";
import { SPPermissionMock } from "../spInternal/SPPermissionMock";
import { AzureActiveDirectoryInfoMock, IAzureActiveDirectoryInfoMock } from "../spInternal/IAzureActiveDirectoryInfoMock";
import { ICultureInfo } from "../spInternal/ICultureInfo";
import { ISPList } from "../spInternal/ISPList";
import { ISPListItem } from "../spInternal/ISPListItem";
import { ISPSiteMock } from "./ISPSiteMock";
import { ISPUserMock } from "./ISPUserMock";
import { ISPWebMock } from "./ISPWebMock";

export class MockPageContext {
    public readonly serviceKey: any;///ServiceKey<PageContext>;
    public aadInfo: AzureActiveDirectoryInfoMock = new AzureActiveDirectoryInfoMock({
        tenantId: "1611080b-c1dd-41eb-bc7d-36749efae915",
        instanceUrl: "https://contoso.sharepoint.com",
        userId: "2611080b-c1dd-41eb-bc7d-36749efae915",
    });
    public cultureInfo: ICultureInfo = {
        currentCultureName: "en-US",
        currentUICultureName: "en-US",
        isRightToLeft: false
    }
    public list: ISPList = {
        id: new Guid("3611080b-c1dd-41eb-bc7d-36749efae915"),
        permissions: SPPermissionMock.fullMask,
        serverRelativeUrl: "/sites/test-site/Shared Documents/",
        title: "Shared Documents"
    };
    public listItem: ISPListItem = {
        id: 1
    };
    public site: ISPSiteMock = {
        absoluteUrl: "https://contoso.sharepoint.com/sites/test-site",
        cdnPrefix: "https://contoso.sharepoint.com",
        classification: "",
        correlationId: "",
        group: {
            id: "1611080b-c1dd-41eb-bc7d-36749efae915",
        },
        id: new Guid("1611080b-c1dd-41eb-bc7d-36749efae915"),
        isNoScriptEnabled: false,
        recycleBinItemCount: 0,
        serverRelativeUrl: "/sites/test-site",
        serverRequestPath: "/sites/test-site",
        sitePagesEnabled: false
    };
    public user: ISPUserMock = {
        displayName: "John Doe",
        email: "john.doe@contoso.com",
        isAnonymousGuestUser: false,
        isExternalGuestUser: false,
        loginName: "john.doe@contoso.com",
        preferUserTimeZone: true
    };
    public web: ISPWebMock ={
        absoluteUrl: "https://contoso.sharepoint.com/sites/test-site",
        id: new Guid("2611080b-c1dd-41eb-bc7d-36749efae915"),
        isAppWeb: false,
        language: 1033,
        languageName: "en-us",
        logoUrl: "https://contoso.sharepoint.com/sites/test-site/SiteAssets/logo.png",
        permissions: SPPermissionMock.fullMask,
        serverRelativeUrl: "/sites/test-site",
        templateName: "STS#1",
        title: "Test Site",
        description: "",
    };
    public legacyPageContext: any;
    public searchQuery: string = "";
    public isInitialized: boolean = true;
    public initialize(options: IPageContextData, legacyPageContext?: any): void {
        this.list = options.list;
        this.listItem = options.listItem;
        this.site = options.site;
        this.user = options.user;
        this.web = options.web;
        this.legacyPageContext = legacyPageContext;
        this.isInitialized = true;
    }
    public serialize() {
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
    public _setSearchQuery(query: string): void {
        this.searchQuery = query;
    }
}
export interface IPageContextData {
    aadInfo?: IAzureActiveDirectoryInfoMock;
    cultureInfo: ICultureInfo;
    list?: ISPList;
    listItem?: ISPListItem;
    page: IPage;
    site: ISPSiteMock;
    user: ISPUserMock;
    web: ISPWebMock;
    featureInfo: any
}