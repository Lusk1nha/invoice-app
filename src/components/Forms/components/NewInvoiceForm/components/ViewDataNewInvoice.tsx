import { GoBackButton } from '../../../../Buttons/components/GoBackButton';
import { TextField } from '../../../../Inputs/components/TextField';
import { ViewDataFormProps } from './../../../models/ViewDataFormProps';

export default function ViewDataNewInvoice({ form, onSubmit }: ViewDataFormProps) {
  const { formState, register, handleSubmit } = form;
  const { errors, isSubmitting } = formState;

  return (
    <form className="w-full h-full grow flex flex-col pb-10" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <GoBackButton title="Go back to home page" className="w-auto flex items-center justify-start mb-6" />
      </div>

      <h1 className="text-2xl font-bold text-chineseBlack dark:text-white mb-6">New Invoice</h1>

      <fieldset className="flex flex-col grow gap-y-6 mb-10">
        <legend className="text-xs font-bold text-brightPurple mb-6 tracking-[-0.25px]">Bill From:</legend>

        <TextField id="billFromStreet" title="Street Address" />

        <div className="flex w-full gap-x-4">
          <TextField id="billFromCity" title="City" />
          <TextField id="billFromPostCode" title="Post Code" />
        </div>

        <TextField id="billFromCountry" title="Country" />
      </fieldset>

      <fieldset className="flex flex-col grow gap-y-6 mb-10">
        <legend className="text-xs font-bold text-brightPurple mb-6 tracking-[-0.25px]">Bill From:</legend>

        <TextField id="billToClientName" title="Client’s Name" />

        <TextField id="billToClientEmail" title="City" />

        <TextField id="billToStreet" title="Street Address" />

        <div className="flex w-full gap-x-4">
          <TextField id="billToCity" title="City" />
          <TextField id="billToPostCode" title="Post Code" />
        </div>

        <TextField id="billToCountry" title="Country" />
      </fieldset>

      <fieldset className="flex flex-col grow gap-y-6 mb-10">
        <legend className="text-xs font-bold text-brightPurple mb-6 tracking-[-0.25px]">Bill From:</legend>

        <TextField id="billToClientName" title="Client’s Name" />

        <TextField id="billToClientEmail" title="City" />

        <TextField id="billToStreet" title="Street Address" />

        <div className="flex w-full gap-x-4">
          <TextField id="billToCity" title="City" />
          <TextField id="billToPostCode" title="Post Code" />
        </div>

        <TextField id="billToCountry" title="Country" />
      </fieldset>

      <fieldset className="flex flex-col grow gap-y-6 mb-10">
        <legend className="text-xs font-bold text-brightPurple mb-6 tracking-[-0.25px]">Bill From:</legend>

        <TextField id="billToClientName" title="Client’s Name" />

        <TextField id="billToClientEmail" title="City" />

        <TextField id="billToStreet" title="Street Address" />

        <div className="flex w-full gap-x-4">
          <TextField id="billToCity" title="City" />
          <TextField id="billToPostCode" title="Post Code" />
        </div>

        <TextField id="billToCountry" title="Country" />
      </fieldset>


      <div>

      </div>
    </form>
  );
};