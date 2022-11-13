import { State } from "../../../shared/enums/Status";

export interface InvoiceItemProps {
  code: string;
  date: string;
  personName: string;
  price: string;
  state: State;
};