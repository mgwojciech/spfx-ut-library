"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundResponse = {
    ok: false,
    status: 404,
    statusText: "Not Found",
    text: () => Promise.resolve("Not Found"),
    json: () => Promise.reject(new Error("Not Found")),
    clone: () => exports.NotFoundResponse
};
//# sourceMappingURL=MockHttpResponse.js.map