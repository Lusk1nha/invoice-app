import { UseFieldArrayAppend, UseFieldArrayRemove, UseFieldArrayUpdate, UseFormSetValue, UseFormRegister, UseFormWatch, FieldArrayWithId, UseFieldArrayInsert } from "react-hook-form";

import { Item, InvoiceModel } from "../../shared/models/InvoiceModel";

export interface FormContextProps {
  fields: FieldArrayWithId<InvoiceModel, "Items", "id">[];
  append: UseFieldArrayAppend<InvoiceModel, "Items">;
  remove: UseFieldArrayRemove;
  insert: UseFieldArrayInsert<InvoiceModel, "Items">
  update: UseFieldArrayUpdate<InvoiceModel, "Items">;
  setValue: UseFormSetValue<InvoiceModel>;
  register: UseFormRegister<InvoiceModel>;
  watch: UseFormWatch<InvoiceModel>;
};