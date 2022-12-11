import { Path, RegisterOptions } from "react-hook-form";
import { DropdownOptionModel } from "../../../../shared/models/DropdownOptionModel";
import { InvoiceModel } from '../../../../shared/models/InvoiceModel';

export interface DropdownProps {
  id: string;
  name: Path<InvoiceModel>;
  title: string;
  options: DropdownOptionModel[]
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  rules?: RegisterOptions;
  disableLabelInTablet?: boolean;
  preventDefaultStyle?: boolean;
}