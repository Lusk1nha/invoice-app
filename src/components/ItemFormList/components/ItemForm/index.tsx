import { RemoveItemButton } from "../../../Buttons/components";
import { ItemTextField } from "../ItemTextField";
import { TotalField } from './../TotalField/index';


export function ItemForm() {
  return (
    <li className="
      grid grid-areas-itemListFormOnSmartphone grid-cols-itemListOnSmartphone grid-rows-itemListOnSmartphone gap-y-5 gap-x-4 
      md:grid-areas-itemListFormOnDesktop md:grid-cols-itemListOnDesktop md:grid-rows-itemListOnDesktop md:gap-y-0 md:gap-x-4">

      <div className="w-full grid-in-itemName">
        <ItemTextField id="itemName" title="Item Name" />
      </div>

      <div className="w-full grid-in-itemQty text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <ItemTextField id="itemQuantity" title="Qty." />
      </div>

      <div className="w-full grid-in-itemPrice text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <ItemTextField id="itemPrice" title="Price" />
      </div>

      <div className="w-full grid-in-itemTotal flex flex-col text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        <TotalField id="itemTotal" price={200.00} quantity={2} />
      </div>

      <div className="grid-in-btnDelete flex justify-center items-center pt-[26px] md:pt-0">
        <RemoveItemButton title="Click here to remove item" />
      </div>
    </li>
  );
}