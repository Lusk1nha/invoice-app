import { UseFormReturn } from "react-hook-form";
import { Item } from "../../../shared/models/InvoiceModel";
import { CreateInvoiceFormModel } from './../components/NewInvoiceForm/models/CreateInvoiceFormModel';

export interface ViewDataFormProps {
  form: UseFormReturn<CreateInvoiceFormModel>;
  onSubmit: (data: CreateInvoiceFormModel) => any;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
};