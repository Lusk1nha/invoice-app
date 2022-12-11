import { useQuery } from "react-query";

import Logic from "../Logic";

import { CreateInvoiceFormModel } from '../../models/CreateInvoiceFormModel';
import { Loading } from './../../../../../Loading/index';

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
    Items: []
  };

  return (
    <>
      {
        isLoading
          ? <Loading />
          : <Logic defaultValues={defaultValues} onSubmit={handleSubmit} />
      }
    </>
  );
};