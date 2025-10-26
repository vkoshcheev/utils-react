import { useEffect } from "react";

/**
 * Disables scroll in current component when condition is true (e.g. when modal is open).
 * 
 * Mainly does two things:
 * 1) Hides scrollbar (overflowY: hidden)
 * 2) Adjusts paddings/margin on the right to prevent layout jumping
 * 
 * @example useDisableScroll(modalIsOpen);
 */
export const useDisableScroll = (disableScroll: boolean) => {
  const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

  useEffect(() => {
    const defaultOverflowValue = 'unset';
    document.body.style.overflowY = disableScroll ? 'hidden' : defaultOverflowValue;
    document.documentElement.style.overflowY = disableScroll ? 'hidden' : defaultOverflowValue;

    const appContainer = document.getElementsByClassName('appContainer')[0] as HTMLElement;
    const targetComponent = appContainer;
    
    if (targetComponent) {
      targetComponent.style.paddingRight = disableScroll ? `${scrollbarWidth * 2}px` : '0px';
      targetComponent.style.marginRight = disableScroll ? `-${scrollbarWidth}px` : '0px';
    }

    return () => {
      document.body.style.overflowY = defaultOverflowValue;
      document.documentElement.style.overflowY = defaultOverflowValue;

      if (targetComponent) {
        targetComponent.style.paddingRight = '0px';
        targetComponent.style.marginRight = '0px';
      }
    };
  }, [disableScroll]);
};