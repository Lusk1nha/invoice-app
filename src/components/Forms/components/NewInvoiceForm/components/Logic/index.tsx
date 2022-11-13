import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { yupResolver } from '@hookform/resolvers/yup';

import View from "../View";

import { LogicDataFormProps } from "../../../../models/LogicDataFormProps";
import { CreateInvoiceFormModel } from "../../models/CreateInvoiceFormModel";
import { useState } from "react";
import { Item } from "../../../../../../shared/models/InvoiceModel";


const validationSchema = Yup.object().shape({
  BillFrom: Yup.object({

    Street: Yup.string()
      .required('Bill From - Street must be added')
      .nullable(),

    City: Yup.string()
      .required('Bill From - City must be added')
      .nullable(),

    PostCode: Yup.string()
      .required('Bill From - Post Code must be added')
      .nullable(),

    Country: Yup.string()
      .required('Bill From - Country must be added')
      .nullable()

  }),

  BillTo: Yup.object({
    Name: Yup.string()
      .required(`Bill To - Client's Name must be added`)
      .nullable(),

    Email: Yup.string()
      .email('Email not valid')
      .required(`Bill To - Client's Email must be added`)
      .nullable(),

    Street: Yup.string()
      .required('Bill To - Street must be added')
      .nullable(),

    City: Yup.string()
      .required('Bill To - City must be added')
      .nullable(),

    PostCode: Yup.string()
      .required('Bill To - Post Code must be added')
      .nullable(),

    Country: Yup.string()
      .required('Bill To - Country must be added')
      .nullable()
  }),

  InvoiceDate: Yup.date()
    .required('Invoice Date must be selected')
    .nullable(),

  PaymentTerms: Yup.string()
    .required('Payment terms must be selected')
    .nullable(),

  ProjectDescription: Yup.string()
    .required('Project Description must be added')
    .nullable(),

  Items: Yup.array()
    .of(
      Yup.object().shape({

        Name: Yup.string()
          .required('Item name must be added')
          .nullable(),

        Quantity: Yup.number()
          .integer()
          .required('Item quantity must be added')
          .nullable(),

        Price: Yup.number()
          .required('Item price must be added')
          .nullable(),

        Total: Yup.number()
          .integer()
          .moreThan(-1)
          .required('Item total must be calculated')
          .nullable()
      })
    )
    .required()
    .min(1, 'An Item must be added')
});


export default function Logic({ defaultValues, onSubmit }: LogicDataFormProps) {
  const [items, setItems] = useState<Item[]>([]);

  const form = useForm<CreateInvoiceFormModel>({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(validationSchema)
  });

  async function handleSubmit(data: CreateInvoiceFormModel) {
    console.log(data);
    await onSubmit(data)
      .then(() => form.reset(data))
      .catch(err => console.error(err))
  };

  function discard() {

  };

  function saveAsDraft() {

  };


  return (
    <View
      form={form}
      onSubmit={handleSubmit}
      items={items}
      setItems={setItems}
    />
  )
}