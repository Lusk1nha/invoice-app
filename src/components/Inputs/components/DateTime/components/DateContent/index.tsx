import { Controls, Pickers } from "./components";
import { MouseEvent, useMemo } from "react";
import CalendarFunctionalities from './../../utils/Calendar';
import { DateContentProps } from "../../models/DateContentProps";

export function DateContent({ shownDate, selectedDate, onChange, onChangeViewDate }: DateContentProps) {
  const Calendar = new CalendarFunctionalities();
  const calendarRows = useMemo(() => Calendar.getCalendarRows(shownDate, true, true), [shownDate]);

  function handleClick(event: MouseEvent) {
    event.stopPropagation();
  };

  return (
    <div onClick={handleClick} className="max-w-[300px] bg-white dark:bg-yankeesBlue-400 flex items-center justify-center shadow-lg rounded-lg w-full flex-col absolute left-0 top-[125%] p-5 z-10 cursor-default">
      <div className="max-w-[300px] w-full h-full">
        <Controls shownDate={shownDate} onChange={onChangeViewDate} />

        <Pickers
          selectedDate={selectedDate}
          onChange={onChange}
          rows={calendarRows}
        />
      </div>
    </div>
  )
}