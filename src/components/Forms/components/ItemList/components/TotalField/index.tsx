import { TotalFieldProps } from "../../models/TotalFieldProps";
import { Label } from './../Label/index';

export function TotalField({ id, price, quantity }: TotalFieldProps) {
  const sum = price * quantity;

  return (
    <div className="w-full grow grid-in-itemTotal flex flex-col text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
      <Label id={id} title="Total" />

      <h5 className="h-full grow flex items-center justify-start font-bold">
        {sum.toFixed(2)}
      </h5>
    </div>
  );
}