import { ServiceKeyMock } from "../../spInternal/serviceLocator/ServiceKeyMock";
import { GraphClientMock } from "./GraphClientMock";

export class GraphClientFactoryMock {
    public static graphClientFactoryMockKey: ServiceKeyMock<GraphClientFactoryMock> = ServiceKeyMock.create("graphClientFactory", GraphClientFactoryMock);
    public mockClient: GraphClientMock = new GraphClientMock();;
    public getClient(): Promise<GraphClientMock> {
        return Promise.resolve(this.mockClient);
    }
}