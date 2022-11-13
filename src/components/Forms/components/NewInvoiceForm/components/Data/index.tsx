import { useQuery } from "react-query";

import Logic from "../Logic";

import { CreateInvoiceFormModel } from '../../models/CreateInvoiceFormModel';

export default function Data() {
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
    const uri = "";

    try {
      // return await fetch(uri, {
      //   method: "POST",
      //   headers: {
      //     "Accept": "application/json",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(dataMapped)
      // });
    } catch (err) {
      console.error(err);
    }
  };

  const defaultValues: CreateInvoiceFormModel = {
    BillFrom: null,
    BillTo: null,
    InvoiceDate: null,
    PaymentTerms: null,
    ProjectDescription: '',
    Items: [{ Name: 'Teste', Price: 232, Quantity: 2, Total: 464}]
  };

  return (
    <>
      {
        isLoading
          ? <div>Loading...</div>
          : <Logic defaultValues={defaultValues} onSubmit={handleSubmit} />
      }
    </>
  );
};