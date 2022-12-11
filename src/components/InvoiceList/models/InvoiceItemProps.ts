import { State } from "../../../shared/enums/Status";

export interface InvoiceItemProps {
  code: string;
  date: string;
  personName: string;
  price: number;
  state: State;
};