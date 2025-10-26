import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";

/**
 * Scrolls to top when component mounts (triggered with useEffect).
 */
export const useScrollToTop = ({smooth = true }: { smooth?: boolean; }) => {
  useEffect(() => {
    scrollToTop(smooth);
  }, []);
}