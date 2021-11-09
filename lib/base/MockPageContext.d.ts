import { IPage } from "../spInternal/IPage";
import { AzureActiveDirectoryInfoMock, IAzureActiveDirectoryInfoMock } from "../spInternal/IAzureActiveDirectoryInfoMock";
import { ICultureInfo } from "../spInternal/ICultureInfo";
import { ISPList } from "../spInternal/ISPList";
import { ISPListItem } from "../spInternal/ISPListItem";
import { ISPSiteMock } from "./ISPSiteMock";
import { ISPUserMock } from "./ISPUserMock";
import { ISPWebMock } from "./ISPWebMock";
export declare class MockPageContext {
    readonly serviceKey: any;
    aadInfo: AzureActiveDirectoryInfoMock;
    cultureInfo: ICultureInfo;
    list: ISPList;
    listItem: ISPListItem;
    site: ISPSiteMock;
    user: ISPUserMock;
    web: ISPWebMock;
    legacyPageContext: any;
    searchQuery: string;
    isInitialized: boolean;
    initialize(options: IPageContextData, legacyPageContext?: any): void;
    serialize(): {
        aadInfo: AzureActiveDirectoryInfoMock;
        cultureInfo: ICultureInfo;
        list: ISPList;
        listItem: ISPListItem;
        site: ISPSiteMock;
        user: ISPUserMock;
        web: ISPWebMock;
    };
    _setSearchQuery(query: string): void;
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
    featureInfo: any;
}
