import { SPEventMock } from "../SPEventMock";
import { AddTokenDefaultErrorMock, AddTokenErrorMock } from "./AddTokenErrorMock";

export class AadTokenProviderMock {
	protected registeredTokens: { resourceEndpoint: string; token: string }[] = [];
	protected registeredErrorResponses: { resourceEndpoint: string; error: AddTokenErrorMock }[] = [];

	public getToken(resourceEndpoint: string, useCachedToken?: boolean): Promise<string> {
		let registeredToken = this.registeredTokens.find(registeredToken => registeredToken.resourceEndpoint === resourceEndpoint);
		if (registeredToken) {
			return Promise.resolve(registeredToken.token);
		}
		return Promise.reject(this.getError(resourceEndpoint));
	}

    public get tokenAcquisitionEvent(): SPEventMock<any> {
        return new SPEventMock();
    }

    readonly onBeforeRedirectEvent: SPEventMock<any> = new SPEventMock();

	public registerToken(resourceEndpoint: string, token: string): void {
		let registeredTokenIndex = this.registeredTokens.findIndex(registeredToken => registeredToken.resourceEndpoint === resourceEndpoint);
		if (registeredTokenIndex === -1) {
			this.registeredTokens.push({ resourceEndpoint, token });
		} else {
			this.registeredTokens[registeredTokenIndex].token = token;
		}
	}

	public registerError(resourceEndpoint: string, error: AddTokenErrorMock): void {
		let registeredErrorIndex = this.registeredErrorResponses.findIndex(registeredError => registeredError.resourceEndpoint === resourceEndpoint);
		if (registeredErrorIndex === -1) {
			this.registeredErrorResponses.push({ resourceEndpoint, error });
		} else {
			this.registeredErrorResponses[registeredErrorIndex].error = error;
		}
	}

    public clearMocks(): void {
        this.registeredTokens = [];
        this.registeredErrorResponses = [];
    }

	private getError(resourceEndpoint: string): AddTokenErrorMock {
		let registeredError = this.registeredErrorResponses.find(registeredError => registeredError.resourceEndpoint === resourceEndpoint);
		if (registeredError) {
			return registeredError.error;
		}
		return new AddTokenDefaultErrorMock(resourceEndpoint, "https://contoso.onmicrosoft.com/");
	}
}