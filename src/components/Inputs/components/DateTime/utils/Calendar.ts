import { Dayjs } from "dayjs";
import { CellReturn } from "../models/CalendarInterface";

export default class CalendarFunctionalities {
  public getCalendarRows(date: Dayjs, hasNextDate?: boolean, hasPrevDate?: boolean): CellReturn[][] {
    const CELLS = this._getCalendarCells(date, hasNextDate, hasPrevDate);
    const ROWS: CellReturn[][] = [];

    // For each 7 cells, is created an new array
    for (let index = 0; index < CELLS.length; index += 7) {
      const CELLS_PER_WEEKEND = CELLS.slice(index, index + 7);
      ROWS.push(CELLS_PER_WEEKEND);
    };

    return ROWS;
  };

  public getDateByMonth(date: Dayjs, isNextMonth: boolean): Dayjs {
    if (date.month() === 0 && !isNextMonth) {
      return date
        .set("year", date.year() - 1)
        .set("month", 11);
    };

    if (date.month() === 11 && isNextMonth) {
      return date
        .set("year", date.year() + 1)
        .set("month", 0)
    };

    return date
      .add(isNextMonth ? 1 : -1, "month")
  };

  private _getCalendarCells(date: Dayjs, hasNextDate?: boolean, hasPrevDate?: boolean): CellReturn[] {
    const CALENDAR_CELLS: CellReturn[] = [];
    const DAYS_IN_A_MONTH: number = date.daysInMonth();

    const CELLS_TO_ADD: number = 35 - DAYS_IN_A_MONTH;

    const NEXT_MONTH: Dayjs = date.add(1, "month");
    const PREV_MONTH: Dayjs = date.subtract(1, "month");

    // Push current month in days cells
    for (let index = 0; index < DAYS_IN_A_MONTH; index++) {
      const CELL = this._getCell(date, index + 1);
      CALENDAR_CELLS.push(CELL);
    };

    // Add to end from next month
    if (hasNextDate) {
      for (let index = 0; index < Math.round(CELLS_TO_ADD / 2); index++) {
        const CELL = this._getCell(NEXT_MONTH, index + 1, true);
        CALENDAR_CELLS.push(CELL);
      };
    };

    if (hasPrevDate) {
      // Add to start from prev month
      for (let index = 0; index < Math.floor(CELLS_TO_ADD / 2); index++) {
        const CELL = this._getCell(PREV_MONTH, PREV_MONTH.daysInMonth() - index, false, true);
        CALENDAR_CELLS.unshift(CELL);
      };
    };

    return CALENDAR_CELLS
  };

  private _getCell(date: Dayjs, dayNumber: number, nextMonth?: boolean, prevMonth?: boolean): CellReturn {
    return {
      text: String(dayNumber),
      value: date
        .clone()
        .set("date", dayNumber),
      nextMonth: nextMonth,
      prevMonth: prevMonth
    };
  };
};