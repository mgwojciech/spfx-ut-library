export class Guid {
    private _guid: string;
    constructor(guid: string) {
        this._guid = guid;
    }
    public equals(other: Guid): boolean {
        return this._guid === other._guid;
    }
    public toString(): string {
        return this._guid;
    }
}