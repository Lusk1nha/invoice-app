export function Placeholder() {
  return (
    <div className="hidden md:grid md:grid-areas-itemListFormOnDesktop md:grid-cols-itemListOnDesktop md:grid-rows-itemListOnDesktop md:gap-y-0 md:gap-x-4">
      <label title="Item Name" className="text-ube dark:text-coolGrey-600 md:dark:text-lavender text-xs font-medium mb-[10px]">
        Item Name
      </label>

      <label title="Item Quantity" className="text-ube dark:text-coolGrey-600 md:dark:text-lavender text-xs font-medium mb-[10px]">
        Qty.
      </label>

      <label title="Item Price" className="text-ube dark:text-coolGrey-600 md:dark:text-lavender text-xs font-medium mb-[10px]">
        Price
      </label>

      <label title="Item Total" className="text-ube dark:text-coolGrey-600 md:dark:text-lavender text-xs font-medium mb-[10px]">
        Total
      </label>
    </div>
  );
}