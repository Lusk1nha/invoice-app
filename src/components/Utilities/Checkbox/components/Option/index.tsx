import { FormEvent } from 'react';
import { OptionProps } from '../../models/OptionProps';

export function Option({ text, value, checkedFn }: OptionProps) {
  const handleOptionChange = (event: FormEvent<HTMLInputElement>) => {
    const value: string | number = event.currentTarget.value;
    checkedFn(value);
  };

  return (
    <label className="w-full flex items-center text-xs font-bold text-chineseBlack dark:text-white cursor-pointer" htmlFor={text} title={text} aria-label={text}>
      <input
        className="w-4 h-4 mr-2 appearance-none bg-lavender dark:bg-yankeesBlue-600 border-none border-brightPurple hover:border-[1px] hover:border-solid rounded-sm relative inline-block checked:bg-brightPurple checked:dark:bg-brightPurple  checked:bg-checkedImage checked:bg-no-repeat checked:border-brightPurple checked:bg-center cursor-pointer transition"
        type="checkbox"
        id={text}
        name={text}
        value={value}
        title={text}
        onChange={handleOptionChange}
      />
      {text}
    </label>
  );
};