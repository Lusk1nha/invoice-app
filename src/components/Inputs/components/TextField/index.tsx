interface TextFieldProps {
  id: string;
  title?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
};


export function TextField({ id, title, className, disabled, placeholder }: TextFieldProps) {
  return (
    <div className={`${className ?? ''} flex flex-col w-full`}>
      <label
        className="text-ube dark:text-coolGrey-600 text-xs font-medium mb-[10px]"
        htmlFor={id}>
        {title}
      </label>

      <input
        className="w-full h-12 bg-white dark:bg-yankeesBlue-600 text-chineseBlack dark:text-white text-xs font-bold tracking-[-0.25px] border-2 border-lavender dark:border-yankeesBlue-400 rounded-[4px] outline-none px-4"
        name={id}
        type="text"
        placeholder={placeholder ?? ""}
      />
    </div>
  );
}