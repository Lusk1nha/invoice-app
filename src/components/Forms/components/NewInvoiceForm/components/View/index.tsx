import { DiscardButton, SaveAsDraftButton, SaveButton } from '../../../../../Utilities/Buttons/components';
import { GoBackButton } from '../../../../../Utilities/Buttons/components/GoBackButton';

import { TextField } from '../../../Inputs/components/TextField';
import { ItemList } from '../../../ItemList';
import { FieldGroup } from '../../../FieldGroup';
import { Title } from '../../../Title';

import { ViewDataFormProps } from '../../../../models/ViewDataFormProps';
import { useFieldArray } from 'react-hook-form';
import { FormProvider } from '../../../../../../context/FormProvider';

export default function View({ form, onSubmit }: ViewDataFormProps) {
  const { formState, register, handleSubmit, reset, control, setValue, watch } = form;
  const { errors, isSubmitting } = formState;
  const { fields, append, remove, update, insert } = useFieldArray({
    control,
    name: "Items",
    rules: {
      required: true
    }
  });

  console.log(errors, isSubmitting);

  return (
    <FormProvider value={{fields, append, remove, update, insert, setValue, watch, register }}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full grow flex flex-col pb-10 scrollbar-thin scrollbar-thumb-lavender dark:scrollbar-thumb-yankeesBlue-400 scrollbar-thumb-rounded-full scrollbar-track-none scroll-mr-4">
        <section className="pb-14 px-10 pt-8 md:px-14 lg:px-20">
          <div>
            <GoBackButton title="Go back to home page" className="w-auto flex items-center justify-start mb-6" />
          </div>

          <Title>New Invoice</Title>

          <FieldGroup label="Bill From:">
            <TextField
              id="billFromStreet"
              title="Street Address"
              name="BillFrom.Street"
              register={register}
            />

            <div className="w-full grid grid-areas-fieldsFormOnSmartphone grid-cols-fieldsFormOnSmartphone grid-rows-fieldsFormOnSmartphone md:flex gap-x-6 gap-y-4">
              <TextField
                className="grid-in-city"
                id="billFromCity"
                title="City"
                name="BillFrom.City"
                register={register}
              />

              <TextField
                className="grid-in-postCode"
                id="billFromPostCode"
                title="Post Code"
                name="BillFrom.PostCode"
                register={register}
              />

              <TextField
                className="grid-in-country"
                id="billFromCountry"
                title="Country"
                name="BillFrom.Country"
                register={register}
              />
            </div>
          </FieldGroup>

          <FieldGroup label="Bill To:">
            <TextField
              id="billToClientName"
              title="Client’s Name"
              name="BillTo.Name"
              register={register}
            />

            <TextField
              id="billToClientEmail"
              title="Client’s Email"
              placeholder="e.g. email@example.com"
              name="BillTo.Email"
              register={register}
            />

            <TextField
              id="billToStreet"
              title="Street Address"
              name="BillTo.Street"
              register={register}
            />

            <div className="w-full grid grid-areas-fieldsFormOnSmartphone grid-cols-fieldsFormOnSmartphone grid-rows-fieldsFormOnSmartphone md:flex gap-x-6 gap-y-4 mb-6">
              <TextField
                className="grid-in-city"
                id="billToCity"
                title="City"
                name="BillTo.City"
                register={register}
              />

              <TextField
                className="grid-in-postCode"
                id="billToPostCode"
                title="Post Code"
                name="BillTo.PostCode"
                register={register}
              />

              <TextField
                className="grid-in-country"
                id="billToCountry"
                title="Country"
                name="BillTo.Country"
                register={register}
              />
            </div>

            <div className="flex flex-col md:flex-row w-full gap-x-6 gap-y-4">
              {/* <TextField id="billToInvoiceDate" title="Invoice Date" />
            <TextField id="billToPaymentTerms" title="Payment Terms" /> */}
            </div>

            <TextField
              id="billToProjectDescription"
              title="Project Description"
              placeholder="e.g. Graphic Design Service"
              name="ProjectDescription"
              register={register}
            />
          </FieldGroup>

          <ItemList
            items={fields}
            append={append}
            setValue={setValue}
            update={update}
            remove={remove}
            register={register}
          />
        </section>

        <ul>

        </ul>

        <section className="bg-transparent flex items-end absolute right-0 left-0 bottom-0">
          <div className="bg-white dark:bg-yankeesBlue-600 h-[91px] flex items-center justify-center grow px-6 shadow-3xl gap-x-2">
            <DiscardButton />
            <SaveAsDraftButton />
            <SaveButton type="submit" />
          </div>
        </section>
      </form>
    </FormProvider>
  );
};