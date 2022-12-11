import { ItemForm, Placeholder } from "./components"
import { AddNewItemButton } from "../../../Utilities/Buttons/components"

import { useContext } from 'react';
import { FormContext } from '../../../../context/components/FormProvider';
import { Label } from "./models/PlaceholderProps";

const placeholders: Label[] = [
  {
    text: 'Item Name',
    title: 'Item Name',
    ariaDescription: 'Label with Item name'
  },
  {
    text: 'Qty.',
    title: 'Item Quantity',
    ariaDescription: 'Label with Item quantity'
  },
  {
    text: 'Price',
    title: 'Item Price',
    ariaDescription: 'Label with Item price'
  },
  {
    text: 'Total',
    title: 'Item Total',
    ariaDescription: 'Label that shows the item price multiplied by item quantity'
  }
]

export function ItemList() {
  const { fields, append } = useContext(FormContext);

  const handleAddItemButtonClick = () => append({
    Name: null,
    Quantity: null,
    Price: null,
    Total: 0
  });

  return (
    <fieldset className="flex flex-col grow gap-y-6 md:gap-y-4 mb-10">
      <legend className="text-lg font-bold text-lightSlateGray mb-6 tracking-[-0.38px]" title="Item list">Item List</legend>

      <ul className="flex flex-col justify-center list-none gap-y-12 md:gap-y-[18px] mb-5">
        <Placeholder labels={placeholders} />

        {
          fields?.length > 0 &&
          fields.map((item, index) => {
            return (
              <ItemForm
                key={item.id}
                item={item}
                index={index}
              />
            )
          })
        }
      </ul>

      <AddNewItemButton title="Click here to add a new item" onClick={handleAddItemButtonClick} />
    </fieldset>
  )
}