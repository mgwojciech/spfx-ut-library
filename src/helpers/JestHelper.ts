import { AadTokenProviderFactoryMock, GraphClientFactoryMock, MockHttpClient } from "..";

export class JestHelper {
    public static registerMocks(jest) {
        jest.mock("@microsoft/sp-http", () => {
            return {
                SPHttpClient: {
                    serviceKey: MockHttpClient.spHttpClientServiceKey,
                    configurations: {
                        v1: 1,
                    },
                },
                HttpClient: {
                    serviceKey: MockHttpClient.httpClientServiceKey,
                    configurations: {
                        v1: 1,
                    },
                },
                AadTokenProviderFactory: {
                    serviceKey: AadTokenProviderFactoryMock.serviceKey,
                },
                MSGraphClientFactory: {
                    serviceKey: GraphClientFactoryMock.serviceKey,
                }
            };
        });
    }
}