import { DatePickerProps } from "../../models/DatePickerProps";
import { useContext } from 'react';
import { FormContext } from './../../../../../../context/components/FormProvider';
import { CalendarSVG } from "../../../../../Icons/components";
import { DateContent } from "../DateContent";
import { useState } from 'react';

import dayjs from 'dayjs';

export function DatePicker({ name, placeholder, rules, selectedDate, shownDate, onChange, onChangeViewDate }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { register } = useContext(FormContext);

  function handleClick() {
    setIsOpen(!isOpen)
  };

  return (
    <div className="w-full h-full flex grow">
      <div onClick={handleClick} className="w-full h-12 relative flex items-center bg-white dark:bg-yankeesBlue-600 text-chineseBlack dark:text-white text-xs font-bold tracking-[-0.25px] border-[1px] border-lavender dark:border-yankeesBlue-400 rounded-[4px] outline-none pl-4 pr-1 cursor-pointer hover:border-brightPurple transition-all select-none">
        <input
          className="w-full h-full bg-transparent text-chineseBlack dark:text-white text-xs font-bold tracking-[-0.25px] outline-none border-none cursor-pointer select-none pointer-events-none"
          type="text"
          placeholder={placeholder ?? ""}
          readOnly
          value={selectedDate?.format('DD MMM YYYY')}
          {...register(name, rules)}
        />

        <div className="w-full max-w-[35px] flex items-center justify-center">
          <CalendarSVG className="fill-ube" />
        </div>

        {
          isOpen
            ? <DateContent shownDate={shownDate} selectedDate={selectedDate ?? dayjs()} onChange={onChange} onChangeViewDate={onChangeViewDate} />
            : null
        }
      </div>
    </div>
  );
}