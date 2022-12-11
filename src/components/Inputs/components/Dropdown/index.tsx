import { Label } from "../Label";
import { DropdownProps } from './DropdownProps';
import { useState } from 'react';

import { Options } from './components';
import { ArrowDownSVG } from './../../../Icons/components';

export function Dropdown({ id, name, title, className, options, preventDefaultStyle, disabled, disableLabelInTablet, placeholder, rules }: DropdownProps) {
  const [text, setText] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownText = text ?? placeholder

  function handleOpen() {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <section className={`flex flex-col w-full ${className ?? ''}`}>
      <Label id={id} title={title} disableInTablet={disableLabelInTablet} />

      <div onClick={handleOpen} className="w-full h-12 bg-white dark:bg-yankeesBlue-600 flex items-center justify-between border-[1px] border-lavender dark:border-yankeesBlue-400 rounded-[4px] outline-none px-4 pr-0 hover:border-brightPurple focus:border-brightPurple relative cursor-pointer transition-colors select-none" title={placeholder}>
        <div>
          <h4 className="text-chineseBlack dark:text-white text-xs font-bold tracking-[-0.25px]" title={dropdownText}>{dropdownText}</h4>
        </div>

        <div className={`w-full max-w-[35px] flex items-center justify-center ${isOpen ? 'rotate-180' : ''}`}>
          <ArrowDownSVG className="fill-none stroke-brightPurple" />
        </div>

        {
          isOpen
            ? <Options name={name} options={options} onChange={setText} />
            : null
        }
      </div>
    </section>
  );
}