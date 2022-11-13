import { ButtonHTMLAttributes, useState } from "react";
import { ArrowDownSVG } from "../../../../Icons/components/ArrowDownSVG";
import { ButtonProps } from "../../models/ButtonProps";
import { Overlay } from "../../../../Overlay";

import { Checkbox } from './../../../Checkbox/index';
import { OptionValues } from "../../../Checkbox/models/CheckboxProps";

const checkboxOptions: OptionValues[] = [
  {
    text: 'Paid',
    value: 'paid',
    order: 3
  },
  {
    text: 'Pending',
    value: 'pending',
    order: 2,
  },
  {
    text: 'Draft',
    value: 'draft',
    order: 1
  }
];

export function FilterButton(props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => setActive(!active);

  return (
    <div className="relative">
      <button onClick={handleClick} {...props}>
        <small className={`${active ? 'rotate-180' : ''} transition`}>
          <ArrowDownSVG className={`fill-transparent stroke-brightPurple`} />
        </small>
      </button>

      <Overlay className={`bg-white dark:bg-yankeesBlue-400 w-[190px] absolute top-[30px] left-[50%] right-[50%] translate-x-[-50%] z-10 rounded-lg shadow-lg ${active ? 'block' : 'hidden'}`}>
        <Checkbox options={checkboxOptions} />
      </Overlay>
    </div>
  );
}