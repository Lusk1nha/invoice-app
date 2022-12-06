export interface ModalContextProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
  setContent: React.Dispatch<React.SetStateAction<boolean>>
};