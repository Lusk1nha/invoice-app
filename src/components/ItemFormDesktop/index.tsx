import { TextField } from './../Inputs/components/TextField/index';

export function ItemFormDesktop() {
  return (
    <tr className="grid grid-cols-itemListOnDesktop justify-center items-center mb-4">
      <td className="flex justify-start mr-4">
        <TextField id="itemQuantity" title="" />
      </td>

      <td className="mr-4">
        <TextField id="itemQuantity" title="" />
      </td>

      <td className="mr-4">
        <TextField id="itemQuantity" title="" />
      </td>

      <td className="mr-4">
        Total
      </td>

      <td className="self-center">
      </td>
    </tr>
  );
}