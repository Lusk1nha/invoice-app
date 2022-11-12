import { ItemForm, Placeholder } from "./components"
import { AddNewItemButton } from "../Buttons/components"

import { ItemFormListProps } from "./models/ItemFormListProps"

export function ItemFormList({ items, setItems }: ItemFormListProps) {

  const handleAddItemButtonClick = () => setItems(items => [...items, {}]);
  

  return (
    <fieldset className="flex flex-col grow gap-y-6 md:gap-y-4 mb-10">
      <legend className="text-lg font-bold text-lightSlateGray mb-6 tracking-[-0.38px]">Item List</legend>

      <ul className="flex flex-col justify-center list-none gap-y-12 md:gap-y-[18px] mb-5">
        <Placeholder />

        {items?.length > 0 &&
          items.map((item, index) => {
            return (
              <ItemForm key={index} />
            )
          })
        }
      </ul>

      <AddNewItemButton onClick={handleAddItemButtonClick} />
    </fieldset>
  )
}