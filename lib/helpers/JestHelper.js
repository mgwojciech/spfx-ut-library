"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JestHelper {
    static registerMocks(jest) {
        jest.mock("@microsoft/sp-http", () => {
            return {
                SPHttpClient: {
                    configurations: {
                        v1: 1,
                    },
                },
                HttpClient: {
                    configurations: {
                        v1: 1,
                    },
                }
            };
        });
    }
}
exports.JestHelper = JestHelper;
//# sourceMappingURL=JestHelper.js.map