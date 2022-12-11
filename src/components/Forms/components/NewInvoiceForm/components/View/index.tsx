import { DiscardButton, SaveAsDraftButton, SaveButton } from '../../../../../Utilities/Buttons/components';
import { GoBackButton } from '../../../../../Utilities/Buttons/components/GoBackButton';

import { TextField, DateTime, Dropdown } from '../../../../../Inputs/components';
import { ItemList } from '../../../ItemList';
import { FieldGroup } from '../../../FieldGroup';
import { Title } from '../../../Title';

import { ViewDataFormProps } from '../../../../models/ViewDataFormProps';

import { useContext } from 'react';
import { FormContext } from '../../../../../../context/components/FormProvider';

import dayjs from 'dayjs';
import { DropdownOptionModel } from '../../../../../../shared/models/DropdownOptionModel';

const paymentTermsOptions = [
  {
    text: 'Net 1 Day',
    value: 1
  },
  {
    text: 'Net 7 Days',
    value: 7
  },
  {
    text: 'Net 14 Days',
    value: 14
  },
  {
    text: 'Net 30 Days',
    value: 30
  }
] as DropdownOptionModel[]

export default function View({ onSubmit, onDiscard }: ViewDataFormProps) {
  const {
    handleSubmit
  } = useContext(FormContext)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full grow flex flex-col pb-10 scrollbar-thin scrollbar-thumb-lavender dark:scrollbar-thumb-yankeesBlue-400 scrollbar-thumb-rounded-full scrollbar-track-none scroll-mr-4">
      <section className="pb-14 px-10 pt-8 md:px-14 lg:px-20">
        <div>
          <GoBackButton title="Go back to home page" className="w-auto flex items-center justify-start mb-6" />
        </div>

        <Title aria-label="New Invoice" title="Form to create new invoices">New Invoice</Title>

        <FieldGroup label="Bill From">
          <TextField
            id="billFromStreet"
            title="Street Address"
            name="BillFrom.Street"
          />

          <div className="w-full grid grid-areas-fieldsFormOnSmartphone grid-cols-fieldsFormOnSmartphone grid-rows-fieldsFormOnSmartphone md:flex gap-x-6 gap-y-4">
            <TextField
              className="grid-in-city"
              id="billFromCity"
              title="City"
              name="BillFrom.City"
              preventDefaultStyle
            />

            <TextField
              className="grid-in-postCode"
              id="billFromPostCode"
              title="Post Code"
              name="BillFrom.PostCode"
              preventDefaultStyle
            />

            <TextField
              className="grid-in-country"
              id="billFromCountry"
              title="Country"
              name="BillFrom.Country"
              preventDefaultStyle
            />
          </div>
        </FieldGroup>

        <FieldGroup label="Bill To">
          <TextField
            id="billToClientName"
            title="Client’s Name"
            name="BillTo.Name"
          />

          <TextField
            id="billToClientEmail"
            title="Client’s Email"
            placeholder="e.g. email@example.com"
            name="BillTo.Email"
          />

          <TextField
            id="billToStreet"
            title="Street Address"
            name="BillTo.Street"
          />

          <div className="w-full grid grid-areas-fieldsFormOnSmartphone grid-cols-fieldsFormOnSmartphone grid-rows-fieldsFormOnSmartphone md:flex gap-x-6 gap-y-4 mb-6">
            <TextField
              className="grid-in-city"
              id="billToCity"
              title="City"
              name="BillTo.City"
              preventDefaultStyle
            />

            <TextField
              className="grid-in-postCode"
              id="billToPostCode"
              title="Post Code"
              name="BillTo.PostCode"
              preventDefaultStyle
            />

            <TextField
              className="grid-in-country"
              id="billToCountry"
              title="Country"
              name="BillTo.Country"
              preventDefaultStyle
            />
          </div>

          <div className="flex flex-col md:flex-row w-full gap-x-6 gap-y-6">
            <DateTime id="billToInvoiceDate" title="Invoice Date" name="InvoiceDate" defaultDate={dayjs()} />
            <Dropdown id="billToPaymentTerms" title="Payment Terms" name="PaymentTerms" placeholder="Select payment term" options={paymentTermsOptions} />
          </div>

          <TextField
            id="billToProjectDescription"
            title="Project Description"
            placeholder="e.g. Graphic Design Service"
            name="ProjectDescription"
          />
        </FieldGroup>

        <ItemList />
      </section>

      <section className="bg-transparent flex items-end absolute right-0 left-0 bottom-0">
        <div className="bg-white dark:bg-yankeesBlue-600 h-[91px] flex items-center justify-center grow px-10 md:px-14 lg:px-20 shadow-3xl gap-x-2 z-10">
          <DiscardButton title="Click here to discard form" type="button" onClick={onDiscard} />
          <SaveAsDraftButton title="Click here to save the content as draft" />
          <SaveButton type="submit" title="Click here to save the content" />
        </div>
      </section>
    </form>
  );
};