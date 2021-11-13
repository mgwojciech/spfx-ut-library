# spfx-ut-library
Mocking library for SPFx

# Setup

This library works best with jest.
Before You begin install jest @types/jest chai @types/chai and ts-jest

    npm i jest @types/jest chai @types/chai ts-jest -D

Then install spfx-ut-library

    npm i spfx-ut-library -D

Now to set jest up add following to Your package.json
```json
{
    ...,
    "jest": {
        "setupFilesAfterEnv": [
        "./tests/setup.ts"
        ],
        "testEnvironment": "jsdom",
        "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
        }
    }
}
```
Finally register mocks for spfx static objects and methods.
Add ./tests/setup.ts file to Your project:
```typescript
///<reference types="jest" />

import { JestHelper } from "spfx-ut-library/lib/helpers/JestHelper";
JestHelper.registerMocks(jest);
```
# Using Graph client mock

Let's assume You have a GraphRepositoryFactory which creates GraphRepository. You can use following code to test it.
```typescript
describe("GraphRepository", () => {
    test("GraphRepositoryFactory", async () => {
        let mockContext = new SPWebPartContextMock();
        mockContext.msGraphClientFactory.mockClient.onRequestExecutingCallback = (request) => {
            if (request.path.indexOf("/sites/contoso.sharepoint.com:/sites/test-site:/lists/test-list-id") >= 0) {
                return {
                    value: [
                        {
                            ID: 1,
                            Title: "Test item 1"
                        }
                    ]
                }
            }
        }
        let factory = new GraphRepositoryFactory(mockContext as any);
        let repo = await factory.getRepository("test-list-id");

        assert.isOk(sth);

        let listItems = await sth.getListItems();

        assert.deepEqual(listItems, [
            {
                ID: 1,
                Title: "Test item 1"
            }
        ])
    });
});
```
# Using SPHttpClient mock
Let's assume You have a SPItemRepository which sends requests to SharePoint using context.spHttpClient. You can mock it using following code.
```typescript
describe("SPItemRepository", ()=>{
    test("SPItemRepository", async () => {
        let mockContext = new SPWebPartContextMock();
        let provider: MockHttpClient = mockContext.serviceScope.consume(MockHttpClient.spHttpClientServiceKey);
        provider.registerResponse({
            url: "https://contoso.sharepoint.com/sites/test-site/_api/web/lists/test-list-id/items?$expand=fields&$top=5",
            method: "GET",
            ok: true,
            response: JSON.stringify({
                value: [
                    {
                        ID: 1,
                        Title: "Test item 1"
                    }
                ]
            })
        });

        let repo = new SPItemsRepository(provider as any, mockContext.pageContext.site.absoluteUrl, "test-list-id");

        let listItems = await repo.getListItems();

        assert.deepEqual(listItems, [
            {
                ID: 1,
                Title: "Test item 1"
            }
        ])
    });
});
```
# Using AadTokenProviderMock
Let's assume you have GraphTokenProvider that uses AadTokenProvider to obtain Graph token. You can mock it using following code.
```typescript
describe("GraphTokenProvider", () => {
	let mockContext = new SPWebPartContextMock();

    afterEach(() => {
        mockContext.aadTokenProviderFactory.aadTokenProviderMock.clearMocks();
    });

	test("Should return graph token", async () => {
        const TOKEN = "token";
		mockContext.aadTokenProviderFactory.aadTokenProviderMock.registerToken("https://graph.microsoft.com", TOKEN);
		const tokenProvider = new GraphTokenProvider(mockContext as any);
        const token = await tokenProvider.getToken();
        assert.equal(token, TOKEN);
	});
});
```