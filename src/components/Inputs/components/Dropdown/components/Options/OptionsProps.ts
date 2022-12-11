import { Path } from "react-hook-form";
import { DropdownOptionModel } from "../../../../../../shared/models/DropdownOptionModel";
import { InvoiceModel } from "../../../../../../shared/models/InvoiceModel";

export interface OptionsProps {
  name: Path<InvoiceModel>;
  options: DropdownOptionModel[];
  onChange: (text: string) => void;
}