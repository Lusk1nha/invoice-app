import { GoBackButton } from '../../../../Buttons/components/GoBackButton';
import { TextField } from '../../../../Inputs/components/TextField';
import { ViewDataFormProps } from './../../../models/ViewDataFormProps';

export default function ViewDataNewInvoice({ form, onSubmit }: ViewDataFormProps) {
  const { formState, register, handleSubmit } = form;
  const { errors, isSubmitting } = formState;

  return (
    <form className="w-full h-full grow flex flex-col pb-10" onSubmit={handleSubmit(onSubmit)}>
      <div>


        <div>
          <GoBackButton title="Go back to home page" className="w-auto flex items-center justify-start mb-6" />
        </div>

        <h1 className="text-2xl font-bold text-chineseBlack dark:text-white mb-6">New Invoice</h1>

        <fieldset className="flex flex-col grow gap-y-6 mb-10">
          <legend className="text-xs font-bold text-brightPurple mb-6 tracking-[-0.25px]">Bill From:</legend>

          <TextField id="billFromStreet" title="Street Address" />

          <div className="w-full grid grid-areas-fieldsFormOnSmartphone grid-cols-fieldsFormOnSmartphone grid-rows-fieldsFormOnSmartphone md:flex gap-x-6 gap-y-4">
            <TextField className="grid-in-city" id="billFromCity" title="City" />
            <TextField className="grid-in-postCode" id="billFromPostCode" title="Post Code" />
            <TextField className="grid-in-country" id="billFromCountry" title="Country" />
          </div>

        </fieldset>

        <fieldset className="flex flex-col grow gap-y-6 mb-10">
          <legend className="text-xs font-bold text-brightPurple mb-6 tracking-[-0.25px]">Bill From:</legend>

          <TextField id="billToClientName" title="Client’s Name" />
          <TextField id="billToClientEmail" title="Client’s Email" placeholder="e.g. email@example.com" />
          <TextField id="billToStreet" title="Street Address" />

          <div className="w-full grid grid-areas-fieldsFormOnSmartphone grid-cols-fieldsFormOnSmartphone grid-rows-fieldsFormOnSmartphone md:flex gap-x-6 gap-y-4 mb-6">
            <TextField className="grid-in-city" id="billToCity" title="City" />
            <TextField className="grid-in-postCode" id="billToPostCode" title="Post Code" />
            <TextField className="grid-in-country" id="billToCountry" title="Country" />
          </div>

          <div className="flex flex-col md:flex-row w-full gap-x-6 gap-y-4">
            <TextField id="billToInvoiceDate" title="Invoice Date" />
            <TextField id="billToPaymentTerms" title="Payment Terms" />
          </div>

          <TextField id="billToProjectDescription" title="Project Description" placeholder="e.g. Graphic Design Service" />
        </fieldset>

        <fieldset className="flex flex-col grow gap-y-6 mb-10">
          <legend className="text-lg font-bold text-lightSlateGray mb-6 tracking-[-0.38px]">Item List</legend>

        </fieldset>

        <div>

        </div>
      </div>
    </form>
  );
};