import React from "react";
import { ArrowLeftSVG, ArrowRightSVG } from "../../../../../../../Icons/components";
import { Dayjs } from 'dayjs';

import CalendarFunctionalities from "../../../../utils/Calendar";

export interface ControlsProps {
  shownDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
};
export function Controls({ shownDate, onChange }: ControlsProps) {
  const { getDateByMonth } = new CalendarFunctionalities();

  function prevDate() {
    const newDate = getDateByMonth(shownDate, false);
    onChange(newDate);
  };

  function nextDate() {
    const newDate = getDateByMonth(shownDate, true);
    onChange(newDate);
  };

  return (
    <div className="w-full flex items-center justify-between mb-5">
      <button type="button" onClick={prevDate}>
        <ArrowLeftSVG className="stroke-brightPurple fill-transparent" />
      </button>

      <h4 className="text-xs text-chineseBlack dark:text-lavender font-bold">
        {shownDate.format("MMMM YYYY")}
      </h4>

      <button type="button" onClick={nextDate}>
        <ArrowRightSVG className="stroke-brightPurple fill-transparent" />
      </button>
    </div>
  );
}