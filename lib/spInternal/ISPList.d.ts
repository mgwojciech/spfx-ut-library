import { Guid } from "../helpers/Guid";
import { SPPermissionMock } from "./SPPermissionMock";
export interface ISPList {
    id: Guid;
    permissions: SPPermissionMock;
    serverRelativeUrl: string;
    title: string;
}
