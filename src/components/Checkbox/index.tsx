import { useState } from "react";
import { Option } from "./components/Option";
import { CheckboxProps } from "./models/CheckboxProps";

export function Checkbox({ options }: CheckboxProps) {
  const [checked, setChecked] = useState<string[]>([]);

  const renderOptions = () => {
    const sortedOptions = sortOptions();
    return sortedOptions.map((option, index) => <Option key={index} {...option} checkedFn={handleCheck} />)
  };

  const handleCheck = (value: string) => {
    if(value != null) {
      const newChecked = checked.includes(value) ? checked.filter(item => item.toLocaleUpperCase() != value.toLocaleUpperCase()) : [...checked, value as string]
 
      setChecked(
        newChecked
      );
    }
  };

  const sortOptions = () => options.sort((a, b) => {
    if(a.order != null && b.order != null) {
      if(a.order < b.order) {
        return -1
      }

      if(a.order > b.order) {
        return 1
      }

      return 0
    };

    if(a.text < b.text) {
      return -1
    };

    if(a.text > b.text) {
      return 1
    };

    return 0
  });

  return (
    <div className="w-auto h-auto flex items-start justify-center flex-col p-6 py-6 gap-y-3">
      {renderOptions()}
    </div>
  );
};