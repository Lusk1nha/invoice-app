import { CreateInvoiceFormModel } from './../components/NewInvoiceForm/models/CreateInvoiceFormModel';

export interface LogicDataFormProps {
  defaultValues: CreateInvoiceFormModel;
  onSubmit: (data: CreateInvoiceFormModel) => Promise<Response | void>;
};