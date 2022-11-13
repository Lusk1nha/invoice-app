import { Path, RegisterOptions, UseFormRegister, ValidationRule } from "react-hook-form";
import { CreateInvoiceFormModel } from "../../NewInvoiceForm/models/CreateInvoiceFormModel";

export interface TextFieldProps {
  id: string;
  name: Path<CreateInvoiceFormModel>;
  title: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  register: UseFormRegister<CreateInvoiceFormModel>;
  rules?: RegisterOptions;
};