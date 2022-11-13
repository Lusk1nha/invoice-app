import { ButtonHTMLAttributes } from "react";

export function DiscardButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button type="button" className="h-12 bg-ghostWhite-400 dark:bg-yankeesBlue-400 text-ube dark:text-lavender px-4 md:px-6 rounded-[24px] text-xs font-bold tracking-[-0.25px] md:mr-auto" {...props}>
      {props.children ?? 'Discard'}
    </button>
  );
}