import { ButtonHTMLAttributes, useContext } from "react";

import { Home } from "../../../../pages/Home";
import { Form } from "../../../Form";
import { PlusSVG } from "../../../Icons/components/PlusSVG";
import { ButtonProps } from "../../models/ButtonProps";

import { ModalContext } from './../../../../context/ModalProvider';

export function NewInvoiceButton(props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const modalContext = useContext(ModalContext);
  
  const handleClick = () => {
    modalContext.setOpened(true);
    modalContext.setContent(<Form />)
  }
  
  return (
    <button {...props} onClick={handleClick} type="button">
      <span className="w-8 h-8 bg-white flex justify-center items-center rounded-full mr-2">
        <PlusSVG className="fill-brightPurple" />
      </span>
    </button>
  )
};