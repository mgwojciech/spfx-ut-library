import { ServiceKeyMock } from "../../spInternal/serviceLocator/ServiceKeyMock";
import { AadTokenProviderMock } from "./AadTokenProviderMock";

export class AadTokenProviderFactoryMock {
    public static serviceKey: ServiceKeyMock<AadTokenProviderFactoryMock> = ServiceKeyMock.create("httpClient", AadTokenProviderFactoryMock);
    public aadTokenProviderMock: AadTokenProviderMock = new AadTokenProviderMock();
    public getTokenProvider(): Promise<AadTokenProviderMock> {
        return Promise.resolve(this.aadTokenProviderMock);
    }
}