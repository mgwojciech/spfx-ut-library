"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphClientFactoryMock_1 = require("../http/graph/GraphClientFactoryMock");
const MockHttpClient_1 = require("../http/MockHttpClient");
const ServiceScopeMock_1 = require("../spInternal/serviceLocator/ServiceScopeMock");
const MockPageContext_1 = require("./MockPageContext");
class SPWebPartContextMock {
    constructor() {
        this.serviceScope = new ServiceScopeMock_1.ServiceScopeMock();
        this.webPartTag = "test-web-part-tag";
        this.instanceId = "4611080b-c1dd-41eb-bc7d-36749efae915";
        this.pageContext = new MockPageContext_1.MockPageContext();
        this.statusRenderer = {
            displayLoadingIndicator: (domElement, loadingMessage, timeout) => {
                domElement.innerHTML = loadingMessage;
            },
            clearLoadingIndicator: (domElement) => {
                domElement.innerHTML = "";
            },
            renderError: (domElement, error) => {
                domElement.innerHTML = error.toString();
            },
            clearError: (domElement) => {
                domElement.innerHTML = "";
            }
        };
        this.sdks = {
            microsoftTeams: {
                teamsJs: null,
                context: {}
            }
        };
        this.microsoftTeams = null;
        this.manifest = {
            manifestVersion: 1,
            id: "dbef608d-3ad5-4f8f-b139-d916f2f0a294",
            componentType: "WebPart",
            alias: "Test web part",
            version: "1.0.0",
            loadLegacyFabricCss: false,
            safeWithCustomScriptDisabled: true,
            requiresCustomScript: false
        };
        this.msGraphClientFactory = new GraphClientFactoryMock_1.GraphClientFactoryMock();
        this.domElement = document.createElement("div");
        this.domElement.id = this.instanceId;
        if (document) {
            document.body.appendChild(this.domElement);
        }
        this.spHttpClient = this.serviceScope.consume(MockHttpClient_1.MockHttpClient.spHttpClientServiceKey);
        this.httpClient = this.serviceScope.consume(MockHttpClient_1.MockHttpClient.httpClientServiceKey);
        this.msGraphClientFactory = this.serviceScope.consume(GraphClientFactoryMock_1.GraphClientFactoryMock.graphClientFactoryMockKey);
    }
    dispose() {
    }
}
exports.SPWebPartContextMock = SPWebPartContextMock;
//# sourceMappingURL=SPWebPartContextMock.js.map