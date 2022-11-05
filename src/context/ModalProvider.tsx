import { createContext } from "react";
import { Modal } from "../components/Modal";
import useModal from './../hooks/useModal';

interface ModalContextProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
  setContent: React.Dispatch<React.SetStateAction<boolean>>
};

export const ModalContext = createContext<ModalContextProps | any>(null);

interface ModalProviderProps {
  children: React.ReactNode;
};  

export function ModalProvider({ children }: ModalProviderProps) {
  const [opened, setOpened, content, setContent] = useModal();

  return (
    <ModalContext.Provider value={{ opened, setOpened, content, setContent }}>
      <Modal on={opened}>{content}</Modal>
      {children}
    </ModalContext.Provider>
  )
};