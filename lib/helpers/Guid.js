"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Guid {
    constructor(guid) {
        this._guid = guid;
    }
    equals(other) {
        return this._guid === other._guid;
    }
    toString() {
        return this._guid;
    }
}
exports.Guid = Guid;
//# sourceMappingURL=Guid.js.map