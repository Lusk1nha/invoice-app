import { TextFieldProps } from "../../../Inputs/models/TextFieldProps";

import { Label } from "../Label";

export interface ItemTextFieldProps {
  index: number;
};

export function ItemTextField({ id, name, title, className, disabled, placeholder, register, rules }: ItemTextFieldProps & TextFieldProps) {
  return (
    <div className={`${className ?? ''} flex flex-col w-full`}>
      <Label id={id} title={title} />

      <input
        className="w-full h-12 bg-white dark:bg-yankeesBlue-600 text-chineseBlack dark:text-white text-xs font-bold tracking-[-0.25px] border-2 border-lavender dark:border-yankeesBlue-400 rounded-[4px] outline-none px-4"
        type="text"
        placeholder={placeholder ?? ""}
        {...register(name)}
      />
    </div>
  );
}