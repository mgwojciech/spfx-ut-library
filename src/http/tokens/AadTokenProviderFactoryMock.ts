import { AadTokenProviderMock } from "./AadTokenProviderMock";

export class AadTokenProviderFactoryMock {
    public aadTokenProviderMock: AadTokenProviderMock = new AadTokenProviderMock();
    public getTokenProvider(): Promise<AadTokenProviderMock> {
        return Promise.resolve(this.aadTokenProviderMock);
    }
}