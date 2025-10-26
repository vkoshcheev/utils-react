import { useState } from "react";

/**
 * @example
 * const { modalIsOpen, openModal, closeModal, toggleModal } = useModalStateHooks();
 */
export function useModalStateHooks () {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return { modalIsOpen, openModal, closeModal, toggleModal };
}