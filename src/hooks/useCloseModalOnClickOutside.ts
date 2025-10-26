import { useEffect, useRef } from "react";
import { sleep } from "utils-js";

export function useCloseModalOnClickOutside ({ closeModal }: { closeModal: () => void }) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        sleep().then(() => closeModal());
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [closeModal]);

  return { modalRef };
}