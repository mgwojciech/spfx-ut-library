export interface AddTokenErrorMock {
    errorCode: string;
    errorMessage: string;
    name: string;
    message: string;
    stack: string;
}

export class AddTokenDefaultErrorMock implements AddTokenErrorMock {
    constructor(private resourceEndpoint: string, private tenantName: string) {}

    public errorCode: string = "invalid_resource";
    public errorMessage: string = `AADSTS500011: The resource principal named ${this.resourceEndpoint} was not found in the tenant named ${this.tenantName}. This can happen if the application has not been installed by the administrator of the tenant or consented to by any user in the tenant. You might have sent your authentication request to the wrong tenant.\r\nTrace ID: f446d33b-3fe3-4a99-9fc2-534da6521dec\r\nCorrelation ID: e8f0328d-2687-4a7b-ba69-450f9a280cc5\r\nTimestamp: ${this.getTimeStamp()}'`;
    public name: string = "ServerError";
    public message: string = this.errorMessage;
    public stack: string = `${this.message}\n    at t [as constructor] (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/chunk.vendors~msalImplicit_none_9f96491354de5d17929c.js:1:108682)\n    at new t (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/chunk.vendors~msalImplicit_none_9f96491354de5d17929c.js:1:146868)\n    at e.saveTokenFromHash (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/chunk.vendors~msalImplicit_none_9f96491354de5d17929c.js:1:190739)\n    at e.processCallBack (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/chunk.vendors~msalImplicit_none_9f96491354de5d17929c.js:1:178944)\n    at e.handleAuthenticationResponse (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/chunk.vendors~msalImplicit_none_9f96491354de5d17929c.js:1:180259)\n    at e.<anonymous> (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/chunk.vendors~msalImplicit_none_9f96491354de5d17929c.js:1:174561)\n    at https://modernb.akamai.odsp.cdn.office.net/files/sp-client/teams-web-part-application-assembly_en-us_8dd4353eb10fc00b13b5d29351a42bbf.js:2:4416\n    at Object.next (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/teams-web-part-application-assembly_en-us_8dd4353eb10fc00b13b5d29351a42bbf.js:2:4521)\n    at o (https://modernb.akamai.odsp.cdn.office.net/files/sp-client/teams-web-part-application-assembly_en-us_8dd4353eb10fc00b13b5d29351a42bbf.js:2:3292)`;

    private getTimeStamp(): string {
        const date = new Date();
        return `${date.getUTCFullYear()}-${this.wlz(date.getUTCMonth()+1)}-${this.wlz(date.getUTCDate())} ${this.wlz(date.getUTCHours())}:${this.wlz(date.getUTCMinutes())}:${this.wlz(date.getUTCSeconds())}Z`
    }

    private wlz(value: number): string { //with leading zero
        return value < 10 ? `0${value}` : `${value}`;
    }
}