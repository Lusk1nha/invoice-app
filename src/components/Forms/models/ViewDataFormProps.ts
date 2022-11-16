import { UseFormReturn } from "react-hook-form";
import { Item } from "../../../shared/models/InvoiceModel";
import { CreateInvoiceFormModel } from './../components/NewInvoiceForm/models/CreateInvoiceFormModel';

export interface ViewDataFormProps {
  onSubmit: (data: CreateInvoiceFormModel) => void;
  onDiscard: () => void;
};