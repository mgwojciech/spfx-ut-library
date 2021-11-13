export interface ISPEventObserverMock {
    readonly instanceId: string;
    readonly componentId: string;
    isDisposed: boolean;
    dispose(): void;
}

export class SPEventMock<T> {
    public add(observer: ISPEventObserverMock, eventHandler: (eventArgs: T) => void): void {
        throw new Error("Method not implemented.");
    }

    public remove(observer: ISPEventObserverMock, eventHandler: (eventArgs: T) => void): void {
        throw new Error("Method not implemented.");
    }
}