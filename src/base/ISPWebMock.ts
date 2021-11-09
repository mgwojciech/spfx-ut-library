import { Guid } from "../helpers/Guid";
import { SPPermissionMock } from "../spInternal/SPPermissionMock";

export interface ISPWebMock {
    absoluteUrl: string;
    id: Guid;
    isAppWeb: boolean;
    language: number;
    languageName: string;
    logoUrl: string;
    permissions: SPPermissionMock;
    serverRelativeUrl: string;
    templateName: string;
    title: string;
    description: string;
}