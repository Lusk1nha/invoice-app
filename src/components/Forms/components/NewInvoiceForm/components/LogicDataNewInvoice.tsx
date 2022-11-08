import { useForm } from "react-hook-form";
import * as yup from "yup";

import ViewDataNewInvoice from "./ViewDataNewInvoice";

import { LogicDataFormProps } from "../../../models/LogicDataFormProps";
import { CreateInvoiceFormModel } from "../models/CreateInvoiceFormModel";
import { useState } from "react";


export default function LogicDataNewInvoice({ defaultValues, onSubmit }: LogicDataFormProps) {
  const [items, setItems] = useState<any[]>([]);

  const form = useForm<CreateInvoiceFormModel>({
    mode: "onSubmit",
    defaultValues
  });

  async function handleSubmit(data: CreateInvoiceFormModel) {
    await onSubmit(data)
      .then(() => form.reset(data))
      .catch(err => console.error(err))
  };

  return <ViewDataNewInvoice form={form} onSubmit={handleSubmit} items={items} setItems={setItems} />
}