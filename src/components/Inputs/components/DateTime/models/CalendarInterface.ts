import { Dayjs } from "dayjs";

export interface CalendarInterface {

};

export type CellReturn = {
  text: string;
  value: Dayjs;
  prevMonth?: boolean;
  nextMonth?: boolean;
};