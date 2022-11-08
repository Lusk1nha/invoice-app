import { UseFormReturn } from "react-hook-form";
import { CreateInvoiceFormModel } from './../components/NewInvoiceForm/models/CreateInvoiceFormModel';

export interface ViewDataFormProps {
  form: UseFormReturn<CreateInvoiceFormModel>;
  onSubmit: (data: CreateInvoiceFormModel) => any;
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
};