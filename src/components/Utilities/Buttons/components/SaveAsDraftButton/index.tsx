import { ButtonHTMLAttributes } from "react";

export function SaveAsDraftButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button type="button" className="h-12 bg-tealishBlue-600 dark:bg-tealishBlue-600 text-coolGrey-600 dark:text-lavender px-4 md:px-6 rounded-[24px] text-xs font-bold tracking-[-0.25px]" {...props}>
      {props.children ?? 'Save as Draft'}
    </button>
  );
}