import { OptionValues } from "./CheckboxProps";

type handleCheckFn = (value: string) => void;

export interface OptionProps extends OptionValues {
  checkedFn: handleCheckFn
};