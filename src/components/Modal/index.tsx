import { useContext } from "react";
import { ModalContext } from "../../context/components/ModalProvider";
import { ModalProps } from "./models/ModalProps";

export function Modal({ children, on, preventClickOutsideClosing }: ModalProps) {
  const modalContext = useContext(ModalContext);
  const handleClickOutside = () => !preventClickOutsideClosing && modalContext.setOpened(false);

  return (
    <section onClick={handleClickOutside} role={"content"} className={`bg-blackTranslucid w-screen h-screen grow absolute flex pt-[65px] md:pt-[73px] lg:pt-0 lg:pl-[103px] z-40 ${on ? 'visible' : 'invisible'}`}>
      {children}
    </section>
  )
};