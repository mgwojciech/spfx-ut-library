export class JestHelper {
    public static registerMocks(jest) {
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