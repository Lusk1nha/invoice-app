import { TextFieldProps } from './TextFieldProps';
import { useContext } from 'react';
import { FormContext } from '../../../../context/components';
import { Label } from '../Label';

export function TextField({ id, name, title, value, className, preventDefaultStyle, disabled, disableLabelInTablet, placeholder, rules }: TextFieldProps) {
  const { register } = useContext(FormContext);

  const defaultClassName = 'w-full h-12 bg-white dark:bg-yankeesBlue-600 text-chineseBlack dark:text-white text-xs font-bold tracking-[-0.25px] border-[1px] border-lavender dark:border-yankeesBlue-400 rounded-[4px] outline-none px-4 hover:border-brightPurple focus:border-brightPurple transition-colors';

  return (
    <div className={`flex flex-col w-full ${className ?? ''}`}>
      <Label id={id} title={title} disableInTablet={disableLabelInTablet} />

      <input
        className={`${preventDefaultStyle ? `${className} ${defaultClassName}` : className ?? defaultClassName} ${disabled ? 'outline-none border-none pointer-events-none' : ''}`}
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder ?? ""}
        title={placeholder ?? title}
        aria-label={placeholder ?? title}
        {...register(name, rules)}
      />
    </div>
  );
}