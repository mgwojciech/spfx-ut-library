import { AadTokenProviderFactoryMock } from "../http/tokens/AadTokenProviderFactoryMock";
import { GraphClientFactoryMock } from "../http/graph/GraphClientFactoryMock";
import { IHttpClient } from "../http/IHttpClient";
import { MockHttpClient } from "../http/MockHttpClient";
import { IClientSideWebPartStatusRenderer } from "../spInternal/IClientSideWebPartStatusRenderer";
import { ServiceScopeMock } from "../spInternal/serviceLocator/ServiceScopeMock";
import { MockPageContext } from "./MockPageContext";

export class SPWebPartContextMock {
    public serviceScope: ServiceScopeMock = new ServiceScopeMock();
    public webPartTag: string = "test-web-part-tag";
    public instanceId: string = "4611080b-c1dd-41eb-bc7d-36749efae915";
    public pageContext: MockPageContext = new MockPageContext();
    public domElement: HTMLElement;
    public statusRenderer: IClientSideWebPartStatusRenderer = {
        displayLoadingIndicator: (domElement: Element, loadingMessage: string, timeout?: number) => {
            domElement.innerHTML = loadingMessage;
        },
        clearLoadingIndicator: (domElement: Element) => {
            domElement.innerHTML = "";
        },
        renderError: (domElement: HTMLElement, error: Error | string) => {
            domElement.innerHTML = error.toString();
        },
        clearError: (domElement: HTMLElement) => {
            domElement.innerHTML = "";
        }
    }
    public sdks = {
        microsoftTeams: {
            teamsJs: null,
            context: {

            }
        }
    }
    public microsoftTeams = null;
    public manifest = {
        manifestVersion: 1,
        id: "dbef608d-3ad5-4f8f-b139-d916f2f0a294",
        componentType: "WebPart",
        alias: "Test web part",
        version: "1.0.0",
        loadLegacyFabricCss: false,
        safeWithCustomScriptDisabled: true,
        requiresCustomScript: false
    }
    public propertyPane: {}
    public httpClient: IHttpClient;
    public spHttpClient: IHttpClient;
    public msGraphClientFactory: GraphClientFactoryMock = new GraphClientFactoryMock();
    public aadTokenProviderFactory: AadTokenProviderFactoryMock;
    constructor() {
        this.domElement = document.createElement("div");
        this.domElement.id = this.instanceId;
        if (document) {
            document.body.appendChild(this.domElement);
        }
        this.spHttpClient = this.serviceScope.consume(MockHttpClient.spHttpClientServiceKey);
        this.httpClient = this.serviceScope.consume(MockHttpClient.httpClientServiceKey);
        this.msGraphClientFactory = this.serviceScope.consume(GraphClientFactoryMock.graphClientFactoryMockKey);
        this.aadTokenProviderFactory = this.serviceScope.consume(AadTokenProviderFactoryMock.serviceKey);
    }
    public dispose(): void {

    }
}