"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GraphRequestMock {
    constructor() {
        this.requestExecutingCallbacks = [];
        this.headers = new Map();
    }
    header(name, value) {
        this.headers.set(name, value);
        return this;
    }
    get() {
        let response = {};
        if (this.requestExecutingCallbacks) {
            this.requestExecutingCallbacks.every(callback => {
                let temp = callback(this);
                if (temp) {
                    response = temp;
                }
            });
        }
        if (response) {
            return Promise.resolve(response);
        }
        return Promise.resolve(this.response);
    }
}
exports.GraphRequestMock = GraphRequestMock;
//# sourceMappingURL=GraphRequestMock.js.map