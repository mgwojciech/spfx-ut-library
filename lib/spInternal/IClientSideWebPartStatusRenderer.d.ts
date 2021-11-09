export interface IClientSideWebPartStatusRenderer {
    displayLoadingIndicator(domElement: Element, loadingMessage: string, timeout?: number): void;
    clearLoadingIndicator(domElement: Element): void;
    renderError(domElement: HTMLElement, error: Error | string): void;
    clearError(domElement: HTMLElement): void;
}
