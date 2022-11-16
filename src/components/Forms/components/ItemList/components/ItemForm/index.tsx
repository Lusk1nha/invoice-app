import { RegisterOptions } from "react-hook-form";
import { Item } from "../../../../../../shared/models/InvoiceModel";
import { RemoveItemButton } from "../../../../../Utilities/Buttons/components";

import { TotalField } from './../TotalField/index';
import { TextField } from './../../../Inputs/components/TextField/index';
import { FormContext } from './../../../../../../context/FormProvider';
import { useContext } from "react";

export interface ItemFormProps {
  index: number;
  item: Item;
  rules?: RegisterOptions;
}

export function ItemForm({ index, rules }: ItemFormProps) {
  const { watch, remove } = useContext(FormContext);

  const watchPrice = watch(`Items.${index}.Price`);
  const watchQuantity = watch(`Items.${index}.Quantity`);

  async function handleRemoveItem() {
    remove(index);
  };

  return (
    <li className="
      grid grid-areas-itemListFormOnSmartphone grid-cols-itemListOnSmartphone grid-rows-itemListOnSmartphone gap-y-5 gap-x-4 
      md:grid-areas-itemListFormOnDesktop md:grid-cols-itemListOnDesktop md:grid-rows-itemListOnDesktop md:gap-y-0 md:gap-x-4">

      <div className="w-full grid-in-itemName">
        <TextField
          id="itemName"
          title="Item Name"
          name={`Items.${index}.Name`}
          disableLabelInTablet
        />
      </div>

      <div className="w-full grid-in-itemQty text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <TextField
          id="itemQuantity"
          title="Qty."
          name={`Items.${index}.Quantity`}
          disableLabelInTablet
        />
      </div>

      <div className="w-full grid-in-itemPrice text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <TextField
          id="itemPrice"
          title="Price"
          name={`Items.${index}.Price`}
          disableLabelInTablet
        />
      </div>

      <div className="w-full grid-in-itemTotal flex flex-col text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <TotalField
          id="itemTotal"
          index={index}
          price={watchPrice ?? 0}
          quantity={watchQuantity ?? 1}
          disableLabelInTablet
        />
      </div>

      <div className="grid-in-btnDelete flex justify-center items-center pt-[26px] md:pt-0">
        <RemoveItemButton
          title="Click here to remove item"
          onClick={handleRemoveItem}
        />
      </div>
    </li>
  );
}