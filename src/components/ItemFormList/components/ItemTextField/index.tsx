import { Label } from "../Label";

interface TextFieldProps {
  id: string;
  title: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
};


export function ItemTextField({ id, title, className, disabled, placeholder }: TextFieldProps) {
  return (
    <div className={`${className ?? ''} flex flex-col w-full`}>
      <Label id={id} title={title} />

      <input
        className="w-full h-12 bg-white dark:bg-yankeesBlue-600 text-chineseBlack dark:text-white text-xs font-bold tracking-[-0.25px] border-2 border-lavender dark:border-yankeesBlue-400 rounded-[4px] outline-none px-4"
        name={id}
        type="text"
        placeholder={placeholder ?? ""}
      />
    </div>
  );
}