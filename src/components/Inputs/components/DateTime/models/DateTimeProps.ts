import { Path, RegisterOptions } from "react-hook-form";
import { InvoiceModel } from "../../../../../shared/models/InvoiceModel";

import { Dayjs } from 'dayjs';

export interface DateTimeProps {
  id: string;
  name: Path<InvoiceModel>;
  title: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  rules?: RegisterOptions;
  disableLabelInTablet?: boolean;
  preventDefaultStyle?: boolean;
  defaultDate?: Dayjs;
};