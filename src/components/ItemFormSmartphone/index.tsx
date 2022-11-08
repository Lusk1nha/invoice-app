import { TextField } from "../Inputs/components/TextField";

export function ItemFormSmartphone() {
  return (
    <li>
      <div className="w-full mb-6">
        <TextField id="itemName" title="Item Name" />
      </div>

      <div className="grid grid-cols-itemListOnSmartphone gap-x-4">
        <div className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
          <TextField id="itemQuantity" title="Qty." />
        </div>

        <div className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
          <TextField id="itemPrice" title="Price" />
        </div>

        <div className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
          <h5>
            Total
          </h5>
        </div>

        <div className="w-full text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
        </div>
      </div>
    </li>
  );
}