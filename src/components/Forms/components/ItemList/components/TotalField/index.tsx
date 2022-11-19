import { TotalFieldProps } from "../../models/TotalFieldProps";
import { TextField } from "../../../../../Inputs/components/TextField";

export function TotalField({ id, price, quantity, index, disableLabelInTablet }: TotalFieldProps) {
  const sum = (price * quantity).toFixed(2);

  return (
    <div className="w-full grow grid-in-itemTotal flex flex-col text-xs text-ube dark:text-coolGrey-600 md:dark:text-lavender tracking-[-0.38px] font-medium">
      <TextField
        id={id}
        title="Total"
        value={sum}
        name={`Items.${index}.Total`}
        className="bg-transparent dark:bg-transparent h-full grow flex items-center justify-start font-bold px-0"
        disableLabelInTablet={disableLabelInTablet}
        disabled
        preventDefaultStyle
      />
    </div>
  );
}