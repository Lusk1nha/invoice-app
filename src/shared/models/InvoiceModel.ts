export interface InvoiceModel {
  BillFrom: Address | null;
  BillTo: Client & Address | null;
  InvoiceDate: Date | null;
  PaymentTerms: string | null;
  ProjectDescription: string | null;
  Items: Item[];
};

export type Client = {
  Name: string;
  Email: string;
};

export type Address = {
  Street: string;
  City: string;
  PostCode: string;
  Country: string;
};

export type Item = {
  Name: string;
  Quantity: number;
  Price: number;
  Total: number;
};