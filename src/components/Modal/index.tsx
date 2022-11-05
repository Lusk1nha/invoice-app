import { ModalProps } from "./models/ModalProps";

export function Modal({ children, on }: ModalProps) {
  return (
    <section className={`bg-blackTranslucid w-full h-full absolute flex pt-[72px] lg:pt-0 lg:pl-[103px] z-40 ${on ? 'visible' : 'invisible'}`}>
      {children}
    </section>
  )
};