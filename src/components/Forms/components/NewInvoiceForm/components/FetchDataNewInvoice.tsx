import { useQuery } from "react-query";
import LogicDataNewInvoice from "./LogicDataNewInvoice";
import { CreateInvoiceFormModel } from '../models/CreateInvoiceFormModel';

export default function FetchDataNewInvoice() {
  const { isLoading, data } = useQuery("mockupUserData", getData);

  async function getData() {
    const uri = "https://jsonplaceholder.typicode.com/users/1"

    try {
      const result = await fetch(uri);
      const data = await result.json();

      return data
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(data: CreateInvoiceFormModel): Promise<Response | void> {
    const dataMapped = {

    };
    const uri = "";

    try {
      return await fetch(uri, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataMapped)
      });
    } catch (err) {
      console.error(err);
    }
  };

  if(isLoading) return <div>Loading...</div>;

  const defaultValues: CreateInvoiceFormModel = {
    BillFrom: null,
    BillTo: null,
    InvoiceDate: null,
    PaymentTerms: null,
    ProjectDescription: '',
    Items: []
  };

  return (
    <>
      {
        isLoading
          ? <div>Loading...</div>
          : <LogicDataNewInvoice defaultValues={defaultValues} onSubmit={handleSubmit} />
      }
    </>
  );
};