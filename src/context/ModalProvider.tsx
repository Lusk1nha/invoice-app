import { createContext } from "react";

import { Modal } from "../components/Modal";
import useModal from './../hooks/useModal';

import { ModalContextProps } from "./models/ModalContextProps";

export const ModalContext = createContext<ModalContextProps | any>(null);

interface ModalProviderProps {
  children: React.ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [opened, setOpened, content, setContent] = useModal();

  return (
    <ModalContext.Provider value={{ opened, setOpened, content, setContent }}>
      {children}
      <Modal on={opened} preventClickOutsideClosing>{content}</Modal>
    </ModalContext.Provider>
  )
};