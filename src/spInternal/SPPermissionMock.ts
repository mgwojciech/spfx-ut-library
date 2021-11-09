export interface IODataBasePermission {
    Low: number;
    High: number;
}

export class SPPermissionMock {
    public static emptyMask = new SPPermissionMock({ High: 0x0, Low: 0x0 });
    public static viewListItems = new SPPermissionMock({ High: 0x0, Low: 0x1 });
    public static addListItems = new SPPermissionMock({ High: 0x0, Low: 0x2 });
    public static editListItems = new SPPermissionMock({ High: 0x0, Low: 0x4 });
    public static deleteListItems = new SPPermissionMock({ High: 0x0, Low: 0x8 });
    public static approveItems = new SPPermissionMock({ High: 0x0, Low: 0x10 });
    public static openItems = new SPPermissionMock({ High: 0x0, Low: 0x20 });
    public static viewVersions = new SPPermissionMock({ High: 0x0, Low: 0x40 });
    public static deleteVersions = new SPPermissionMock({ High: 0x0, Low: 0x80 });
    public static cancelCheckout = new SPPermissionMock({ High: 0x0, Low: 0x100 });
    public static managePersonalViews = new SPPermissionMock({ High: 0x0, Low: 0x200 });
    public static manageLists = new SPPermissionMock({ High: 0x0, Low: 0x800 });
    public static viewFormPages = new SPPermissionMock({ High: 0x0, Low: 0x1000 });
    public static open = new SPPermissionMock({ High: 0x0, Low: 0x20000 });
    public static viewPages = new SPPermissionMock({ High: 0x0, Low: 0x20000 });
    public static layoutsPage = new SPPermissionMock({ High: 0x0, Low: 0x21000 });
    public static addAndCustomizePages = new SPPermissionMock({ High: 0x0, Low: 0x40000 });
    public static applyThemeAndBorder = new SPPermissionMock({ High: 0x0, Low: 0x80000 });
    public static applyStyleSheets = new SPPermissionMock({ High: 0x0, Low: 0x100000 });
    public static viewUsageData = new SPPermissionMock({ High: 0x0, Low: 0x200000 });
    public static createSSCSite = new SPPermissionMock({ High: 0x0, Low: 0x400000 });
    public static manageSubwebs = new SPPermissionMock({ High: 0x0, Low: 0x800000 });
    public static createGroups = new SPPermissionMock({ High: 0x0, Low: 0x1000000 });
    public static managePermissions = new SPPermissionMock({ High: 0x0, Low: 0x2000000 });
    public static browseDirectories = new SPPermissionMock({ High: 0x0, Low: 0x4000000 });
    public static browserUserInfo = new SPPermissionMock({ High: 0x0, Low: 0x8000000 });
    public static addDelPrivateWebParts = new SPPermissionMock({ High: 0x0, Low: 0x10000000 });
    public static updatePersonalWebParts = new SPPermissionMock({ High: 0x0, Low: 0x20000000 });
    public static manageWeb = new SPPermissionMock({ High: 0x0, Low: 0x40000000 });
    public static useClientIntegration = new SPPermissionMock({ High: 0x10, Low: 0x0 });
    public static useRemoteAPIs = new SPPermissionMock({ High: 0x20, Low: 0x0 });
    public static manageAlerts = new SPPermissionMock({ High: 0x40, Low: 0x0 });
    public static createAlerts = new SPPermissionMock({ High: 0x80, Low: 0x0 });
    public static editMyUserInfo = new SPPermissionMock({ High: 0x100, Low: 0x0 });
    public static enumeratePermissions = new SPPermissionMock({ High: 0x40000000, Low: 0x0 });
    public static fullMask = new SPPermissionMock({ High: 0x7fffffff, Low: 0xffffffff });

    constructor(public value: IODataBasePermission) {
    }
    public hasAnyPermissions(...permissions: SPPermissionMock[]): boolean {
        return permissions.some((permission) => {
            return this.hasPermission(permission);
        });
    }
    public hasPermission(permission: SPPermissionMock): boolean {
        return (permission &&
            (permission.value.Low & this.value.Low) === permission.value.Low &&
            (permission.value.High & this.value.High) === permission.value.High);
    }
    public hasAllPermissions(...permissions: SPPermissionMock[]): boolean {
        return permissions.every((permission) => {
            return this.hasPermission(permission);
        });
    }
}