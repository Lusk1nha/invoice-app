import { useFieldArray, useForm } from "react-hook-form";
import * as Yup from "yup";

import { yupResolver } from '@hookform/resolvers/yup';

import View from "../View";

import { LogicDataFormProps } from "../../../../models/LogicDataFormProps";
import { CreateInvoiceFormModel } from "../../models/CreateInvoiceFormModel";

import { FormProvider } from '../../../../../../context/components/FormProvider';
import { redirect } from "react-router-dom";

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

  const { formState, register, handleSubmit, reset, control, setValue, watch } = useForm<CreateInvoiceFormModel>({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(validationSchema)
  });

  const { errors, isSubmitting } = formState;

  const { fields, append, remove, update, insert } = useFieldArray({
    control,
    name: "Items",
    rules: {
      required: true,
      minLength: 1
    }
  });

  console.log(errors);

  async function handleSubmitLogic(data: CreateInvoiceFormModel): Promise<void> {
    console.log(data);
    
    await onSubmit(data)
      .then(() => reset(data))
      .catch(err => console.error(err))
  };

  async function handleDiscard(): Promise<void> {
    await reset();
    await redirect('/');
  };

  async function saveAsDraft(): Promise<void> {

  };


  return (
    <FormProvider value={{ fields, handleSubmit, append, remove, update, insert, setValue, watch, register }}>
      <View onSubmit={handleSubmitLogic} onDiscard={handleDiscard} />
    </FormProvider>
  )
}