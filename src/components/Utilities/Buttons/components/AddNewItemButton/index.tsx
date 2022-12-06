import { ButtonHTMLAttributes } from "react";

export function AddNewItemButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className="w-full h-12 bg-ghostWhite-400 dark:bg-yankeesBlue-400 rounded-[24px] text-ube dark:text-coolGrey-600 text-xs font-bold tracking-[-0.25px]" {...props} >
    {props.children ?? '+ Add New Item'}
  </button>
};