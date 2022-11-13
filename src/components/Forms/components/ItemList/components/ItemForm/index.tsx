import { UseFormRegister, RegisterOptions, UseFieldArrayUpdate, UseFormSetValue } from "react-hook-form";
import { InvoiceModel, Item } from "../../../../../../shared/models/InvoiceModel";
import { RemoveItemButton } from "../../../../../Utilities/Buttons/components";
import { CreateInvoiceFormModel } from "../../../NewInvoiceForm/models/CreateInvoiceFormModel";
import { ItemTextField } from "../ItemTextField";
import { TotalField } from './../TotalField/index';

export interface ItemFormProps {
  index: number;
  item: Item;
  register: UseFormRegister<InvoiceModel>;
  rules?: RegisterOptions;
}

export function ItemForm({ index, register, rules }: ItemFormProps) {
  return (
    <li className="
      grid grid-areas-itemListFormOnSmartphone grid-cols-itemListOnSmartphone grid-rows-itemListOnSmartphone gap-y-5 gap-x-4 
      md:grid-areas-itemListFormOnDesktop md:grid-cols-itemListOnDesktop md:grid-rows-itemListOnDesktop md:gap-y-0 md:gap-x-4">

      <div className="w-full grid-in-itemName">
        <ItemTextField
          id="itemName"
          index={index}
          title="Item Name"
          name={`Items.${index}.Name`}
          register={register}
        />
      </div>

      <div className="w-full grid-in-itemQty text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <ItemTextField
          id="itemQuantity"
          index={index}
          title="Qty."
          name={`Items.${index}.Quantity`}
          register={register}
        />
      </div>

      <div className="w-full grid-in-itemPrice text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <ItemTextField
          id="itemPrice"
          index={index}
          title="Price"
          name={`Items.${index}.Price`}
          register={register}
        />
      </div>

      <div className="w-full grid-in-itemTotal flex flex-col text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <TotalField
          id="itemTotal"
          price={200.00}
          quantity={2}
        />
      </div>

      <div className="grid-in-btnDelete flex justify-center items-center pt-[26px] md:pt-0">
        <RemoveItemButton
          title="Click here to remove item"
        />
      </div>
    </li>
  );
}