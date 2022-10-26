import { PlusSVG } from "../../Icons/PlusSVG";

export function NewInvoiceButton() {
  return(
    <button className="w-[90px] h-11 flex items-center bg-brightPurple p-[6px] rounded-[24px]">
      <span className="w-8 h-8 bg-white flex justify-center items-center rounded-full mr-2">
        <PlusSVG className="fill-brightPurple" />
      </span>
      <p className="text-xs text-white font-bold text-h leading-4">New</p>
    </button>
  )
};