import { LabelProps } from "../../models/LabelProps";

export function Label({ id, title, disable, disableInTablet }: LabelProps) {
  return (
    <label
      className={`text-ube dark:text-coolGrey-600 md:dark:text-lavender text-xs font-medium mb-[10px] ${disableInTablet ? 'md:hidden' : ''} ${disable ? 'hidden' : ''}`}
      htmlFor={id}>
      {title}
    </label>
  );
}