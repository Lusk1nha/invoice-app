export interface CheckboxProps {
  options: OptionValues[]
};

export type OptionValues = {
  value: string | number;
  text: string;
  order?: number;
};
