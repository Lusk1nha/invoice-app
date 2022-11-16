import { Path, RegisterOptions } from "react-hook-form";
import { CreateInvoiceFormModel } from "../../NewInvoiceForm/models/CreateInvoiceFormModel";

export interface TextFieldProps {
  id: string;
  name: Path<CreateInvoiceFormModel>;
  title: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  rules?: RegisterOptions;
  disableLabelInTablet?: boolean;
  preventDefaultStyle?: boolean;
};