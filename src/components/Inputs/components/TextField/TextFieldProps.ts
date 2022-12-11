import { Path, RegisterOptions } from "react-hook-form";
import { InvoiceModel } from '../../../../shared/models/InvoiceModel';

export interface TextFieldProps {
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
};