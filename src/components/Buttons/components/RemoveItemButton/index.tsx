import { ButtonHTMLAttributes } from "react";
import { DeleteSVG } from "../../../Icons/components";

export function RemoveItemButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button type="button" className="group flex items-center justify-center" {...props}>
      <div className="flex items-center justify-center">
        <DeleteSVG className="fill-coolGrey-400 group-hover:fill-coolGrey-600 transition-all" />
      </div>
    </button>
  );
}