import { Path, RegisterOptions } from "react-hook-form";
import { InvoiceModel } from "../../../../../shared/models/InvoiceModel";
import { Dayjs } from 'dayjs';

export interface DatePickerProps {
  name: Path<InvoiceModel>;
  placeholder?: string;
  rules?: RegisterOptions;
  selectedDate: Dayjs;
  shownDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
  onChangeViewDate: (newDate: Dayjs) => void;
};