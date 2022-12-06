import { ButtonHTMLAttributes } from "react";

export function SaveButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button type="button" className="h-12 bg-brightPurple text-white px-4 md:px-6 rounded-[24px] text-xs font-bold tracking-[-0.25px]" {...props}>
      {props.children ?? 'Save & Send'}
    </button>
  );
}