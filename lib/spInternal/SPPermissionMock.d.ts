export interface IODataBasePermission {
    Low: number;
    High: number;
}
export declare class SPPermissionMock {
    value: IODataBasePermission;
    static emptyMask: SPPermissionMock;
    static viewListItems: SPPermissionMock;
    static addListItems: SPPermissionMock;
    static editListItems: SPPermissionMock;
    static deleteListItems: SPPermissionMock;
    static approveItems: SPPermissionMock;
    static openItems: SPPermissionMock;
    static viewVersions: SPPermissionMock;
    static deleteVersions: SPPermissionMock;
    static cancelCheckout: SPPermissionMock;
    static managePersonalViews: SPPermissionMock;
    static manageLists: SPPermissionMock;
    static viewFormPages: SPPermissionMock;
    static open: SPPermissionMock;
    static viewPages: SPPermissionMock;
    static layoutsPage: SPPermissionMock;
    static addAndCustomizePages: SPPermissionMock;
    static applyThemeAndBorder: SPPermissionMock;
    static applyStyleSheets: SPPermissionMock;
    static viewUsageData: SPPermissionMock;
    static createSSCSite: SPPermissionMock;
    static manageSubwebs: SPPermissionMock;
    static createGroups: SPPermissionMock;
    static managePermissions: SPPermissionMock;
    static browseDirectories: SPPermissionMock;
    static browserUserInfo: SPPermissionMock;
    static addDelPrivateWebParts: SPPermissionMock;
    static updatePersonalWebParts: SPPermissionMock;
    static manageWeb: SPPermissionMock;
    static useClientIntegration: SPPermissionMock;
    static useRemoteAPIs: SPPermissionMock;
    static manageAlerts: SPPermissionMock;
    static createAlerts: SPPermissionMock;
    static editMyUserInfo: SPPermissionMock;
    static enumeratePermissions: SPPermissionMock;
    static fullMask: SPPermissionMock;
    constructor(value: IODataBasePermission);
    hasAnyPermissions(...permissions: SPPermissionMock[]): boolean;
    hasPermission(permission: SPPermissionMock): boolean;
    hasAllPermissions(...permissions: SPPermissionMock[]): boolean;
}
