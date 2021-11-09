"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SPPermissionMock {
    constructor(value) {
        this.value = value;
    }
    hasAnyPermissions(...permissions) {
        return permissions.some((permission) => {
            return this.hasPermission(permission);
        });
    }
    hasPermission(permission) {
        return (permission &&
            (permission.value.Low & this.value.Low) === permission.value.Low &&
            (permission.value.High & this.value.High) === permission.value.High);
    }
    hasAllPermissions(...permissions) {
        return permissions.every((permission) => {
            return this.hasPermission(permission);
        });
    }
}
exports.SPPermissionMock = SPPermissionMock;
SPPermissionMock.emptyMask = new SPPermissionMock({ High: 0x0, Low: 0x0 });
SPPermissionMock.viewListItems = new SPPermissionMock({ High: 0x0, Low: 0x1 });
SPPermissionMock.addListItems = new SPPermissionMock({ High: 0x0, Low: 0x2 });
SPPermissionMock.editListItems = new SPPermissionMock({ High: 0x0, Low: 0x4 });
SPPermissionMock.deleteListItems = new SPPermissionMock({ High: 0x0, Low: 0x8 });
SPPermissionMock.approveItems = new SPPermissionMock({ High: 0x0, Low: 0x10 });
SPPermissionMock.openItems = new SPPermissionMock({ High: 0x0, Low: 0x20 });
SPPermissionMock.viewVersions = new SPPermissionMock({ High: 0x0, Low: 0x40 });
SPPermissionMock.deleteVersions = new SPPermissionMock({ High: 0x0, Low: 0x80 });
SPPermissionMock.cancelCheckout = new SPPermissionMock({ High: 0x0, Low: 0x100 });
SPPermissionMock.managePersonalViews = new SPPermissionMock({ High: 0x0, Low: 0x200 });
SPPermissionMock.manageLists = new SPPermissionMock({ High: 0x0, Low: 0x800 });
SPPermissionMock.viewFormPages = new SPPermissionMock({ High: 0x0, Low: 0x1000 });
SPPermissionMock.open = new SPPermissionMock({ High: 0x0, Low: 0x20000 });
SPPermissionMock.viewPages = new SPPermissionMock({ High: 0x0, Low: 0x20000 });
SPPermissionMock.layoutsPage = new SPPermissionMock({ High: 0x0, Low: 0x21000 });
SPPermissionMock.addAndCustomizePages = new SPPermissionMock({ High: 0x0, Low: 0x40000 });
SPPermissionMock.applyThemeAndBorder = new SPPermissionMock({ High: 0x0, Low: 0x80000 });
SPPermissionMock.applyStyleSheets = new SPPermissionMock({ High: 0x0, Low: 0x100000 });
SPPermissionMock.viewUsageData = new SPPermissionMock({ High: 0x0, Low: 0x200000 });
SPPermissionMock.createSSCSite = new SPPermissionMock({ High: 0x0, Low: 0x400000 });
SPPermissionMock.manageSubwebs = new SPPermissionMock({ High: 0x0, Low: 0x800000 });
SPPermissionMock.createGroups = new SPPermissionMock({ High: 0x0, Low: 0x1000000 });
SPPermissionMock.managePermissions = new SPPermissionMock({ High: 0x0, Low: 0x2000000 });
SPPermissionMock.browseDirectories = new SPPermissionMock({ High: 0x0, Low: 0x4000000 });
SPPermissionMock.browserUserInfo = new SPPermissionMock({ High: 0x0, Low: 0x8000000 });
SPPermissionMock.addDelPrivateWebParts = new SPPermissionMock({ High: 0x0, Low: 0x10000000 });
SPPermissionMock.updatePersonalWebParts = new SPPermissionMock({ High: 0x0, Low: 0x20000000 });
SPPermissionMock.manageWeb = new SPPermissionMock({ High: 0x0, Low: 0x40000000 });
SPPermissionMock.useClientIntegration = new SPPermissionMock({ High: 0x10, Low: 0x0 });
SPPermissionMock.useRemoteAPIs = new SPPermissionMock({ High: 0x20, Low: 0x0 });
SPPermissionMock.manageAlerts = new SPPermissionMock({ High: 0x40, Low: 0x0 });
SPPermissionMock.createAlerts = new SPPermissionMock({ High: 0x80, Low: 0x0 });
SPPermissionMock.editMyUserInfo = new SPPermissionMock({ High: 0x100, Low: 0x0 });
SPPermissionMock.enumeratePermissions = new SPPermissionMock({ High: 0x40000000, Low: 0x0 });
SPPermissionMock.fullMask = new SPPermissionMock({ High: 0x7fffffff, Low: 0xffffffff });
//# sourceMappingURL=SPPermissionMock.js.map