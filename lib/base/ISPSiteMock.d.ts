import { Guid } from "../helpers/Guid";
export interface ISPSiteMock {
    absoluteUrl: string;
    cdnPrefix: string;
    classification: string;
    correlationId: string;
    group: {
        id: string;
    };
    id: Guid;
    isNoScriptEnabled: boolean;
    recycleBinItemCount: number;
    serverRelativeUrl: string;
    serverRequestPath: string;
    sitePagesEnabled: boolean;
}
