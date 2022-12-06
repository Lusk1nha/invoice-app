import { Dayjs } from 'dayjs';

export interface DateContentProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
  onChangeViewDate: (newDate: Dayjs) => void;
};