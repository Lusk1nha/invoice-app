import { ButtonHTMLAttributes } from "react";
import { PlusSVG } from "../../Icons/PlusSVG";
import { ButtonProps } from "../ButtonProps";

export function NewInvoiceButton(props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <span className="w-8 h-8 bg-white flex justify-center items-center rounded-full mr-2">
        <PlusSVG className="fill-brightPurple" />
      </span>

      {/* <p className="text-xs text-white font-bold text-h leading-4">
        New
      </p> */}
    </button>
  )
};