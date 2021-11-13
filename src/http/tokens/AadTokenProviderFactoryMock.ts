import { AadTokenProviderMock } from "./AadTokenProviderMock";

export class AadTokenProviderFactoryMock {
    private aadTokenProvider: AadTokenProviderMock = new AadTokenProviderMock();
    public getTokenProvider(): Promise<AadTokenProviderMock> {
        return Promise.resolve(this.aadTokenProvider);
    }
}