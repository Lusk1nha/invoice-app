import { LabelProps } from "../../models/LabelProps";

export function Label({ id, title }: LabelProps) {
  return (
    <label
      className="text-ube dark:text-coolGrey-600 md:dark:text-lavender text-xs font-medium mb-[10px] md:hidden"
      htmlFor={id}>
      {title}
    </label>
  );
}