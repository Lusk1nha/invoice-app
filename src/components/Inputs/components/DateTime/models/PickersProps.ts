import { CellReturn } from "./CalendarInterface";
import { Dayjs } from 'dayjs';

export interface PickersProps {
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
  rows: CellReturn[][];
};