import { ServiceKeyMock } from "../../spInternal/serviceLocator/ServiceKeyMock";
import { GraphClientMock } from "./GraphClientMock";
export declare class GraphClientFactoryMock {
    static graphClientFactoryMockKey: ServiceKeyMock<GraphClientFactoryMock>;
    mockClient: GraphClientMock;
    getClient(): Promise<GraphClientMock>;
}
