import { HTMLProps } from "react";

export function Title(props: HTMLProps<HTMLHeadingElement>) {
  return (
    <h1 className="text-2xl font-bold text-chineseBlack dark:text-white mb-6" {...props} />
  );
}