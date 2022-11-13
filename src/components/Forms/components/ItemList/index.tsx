import { ItemForm, Placeholder } from "./components"
import { AddNewItemButton } from "../../../Utilities/Buttons/components"

import { ItemFormListProps } from "./models/ItemFormListProps"

export function ItemList({ items, append, setValue, remove, update, register, rules }: ItemFormListProps) {
  const handleAddItemButtonClick = () => append({
    Name: null,
    Quantity: null,
    Price: null,
    Total: 0
  });

  return (
    <fieldset className="flex flex-col grow gap-y-6 md:gap-y-4 mb-10">
      <legend className="text-lg font-bold text-lightSlateGray mb-6 tracking-[-0.38px]">Item List</legend>

      <ul className="flex flex-col justify-center list-none gap-y-12 md:gap-y-[18px] mb-5">
        <Placeholder />

        {items?.length > 0 &&
          items.map((item, index) => {
            return (
              <ItemForm
                key={item.id}
                item={item}
                index={index}
                register={register}
              />
            )
          })
        }
      </ul>

      <AddNewItemButton onClick={handleAddItemButtonClick} />
    </fieldset>
  )
}