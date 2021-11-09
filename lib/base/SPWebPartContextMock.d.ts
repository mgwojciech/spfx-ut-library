import { GraphClientFactoryMock } from "../http/graph/GraphClientFactoryMock";
import { IHttpClient } from "../http/IHttpClient";
import { IClientSideWebPartStatusRenderer } from "../spInternal/IClientSideWebPartStatusRenderer";
import { ServiceScopeMock } from "../spInternal/serviceLocator/ServiceScopeMock";
import { MockPageContext } from "./MockPageContext";
export declare class SPWebPartContextMock {
    serviceScope: ServiceScopeMock;
    webPartTag: string;
    instanceId: string;
    pageContext: MockPageContext;
    domElement: HTMLElement;
    statusRenderer: IClientSideWebPartStatusRenderer;
    sdks: {
        microsoftTeams: {
            teamsJs: any;
            context: {};
        };
    };
    microsoftTeams: any;
    manifest: {
        manifestVersion: number;
        id: string;
        componentType: string;
        alias: string;
        version: string;
        loadLegacyFabricCss: boolean;
        safeWithCustomScriptDisabled: boolean;
        requiresCustomScript: boolean;
    };
    propertyPane: {};
    httpClient: IHttpClient;
    spHttpClient: IHttpClient;
    msGraphClientFactory: GraphClientFactoryMock;
    constructor();
    dispose(): void;
}
