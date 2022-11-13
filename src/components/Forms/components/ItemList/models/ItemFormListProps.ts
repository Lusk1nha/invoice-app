import { UseFormRegister, RegisterOptions, UseFieldArrayAppend, UseFieldArrayInsert, UseFieldArrayRemove, UseFieldArrayUpdate, UseFormSetValue } from "react-hook-form";
import { InvoiceModel, Item } from "../../../../../shared/models/InvoiceModel";

export interface ItemFormListProps {
  items: Item[];
  append: UseFieldArrayAppend<InvoiceModel, "Items">;
  remove: UseFieldArrayRemove;
  update: UseFieldArrayUpdate<InvoiceModel, "Items">;
  setValue: UseFormSetValue<InvoiceModel>;
  register: UseFormRegister<InvoiceModel>;
  rules?: RegisterOptions;
};