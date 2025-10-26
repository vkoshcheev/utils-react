/**
 * Disables scroll in current component when condition is true (e.g. when modal is open).
 *
 * Mainly does two things:
 * 1) Hides scrollbar (overflowY: hidden)
 * 2) Adjusts paddings/margin on the right to prevent layout jumping
 *
 * @example useDisableScroll(modalIsOpen);
 */
export declare const useDisableScroll: (disableScroll: boolean) => void;
