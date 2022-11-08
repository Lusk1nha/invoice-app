import { AddNewItemButton } from '../../../../Buttons/components/AddNewItemButton';
import { GoBackButton } from '../../../../Buttons/components/GoBackButton';
import { TextField } from '../../../../Inputs/components/TextField';
import { ItemFormDesktop } from '../../../../ItemFormDesktop';
import { ItemFormSmartphone } from '../../../../ItemFormSmartphone';
import { ViewDataFormProps } from './../../../models/ViewDataFormProps';

export default function ViewDataNewInvoice({ form, onSubmit, items, setItems }: ViewDataFormProps) {
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

          <table className="hidden flex-col justify-center md:flex">
            <thead>
              <tr className="grid grid-cols-itemListOnDesktop mb-4">
                <th align="left" className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">Item Name</th>
                <th align="left" className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">Qty.</th>
                <th align="left" className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">Price</th>
                <th align="left" className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {items?.length > 0 &&
                items.map((item, index) => {
                  return (
                    <ItemFormDesktop key={index} />
                  )
                })
              }
            </tbody>
          </table>

          <ul className="flex flex-col justify-center list-none md:hidden gap-y-12">
            {items?.length > 0 &&
              items.map((item, index) => {
                return (
                  <ItemFormSmartphone key={index} />
                )
              })
            }
          </ul>


          <AddNewItemButton setItems={setItems} className="w-full h-12 bg-ghostWhite-400 dark:bg-yankeesBlue-400 rounded-[24px] text-ube dark:text-coolGrey-600 text-xs font-bold tracking-[-0.25px]">
            + Add New Item
          </AddNewItemButton>
        </fieldset>

        <div>

        </div>
      </div>
    </form>
  );
};