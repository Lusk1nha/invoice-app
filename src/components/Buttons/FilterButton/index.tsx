import { ButtonHTMLAttributes, useState } from "react";
import { ArrowDownSVG } from "../../Icons/ArrowDownSVG";
import { ButtonProps } from "../ButtonProps";

export function FilterButton(props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => setActive(!active);

  return (
    <button onClick={handleClick} {...props}>
      {/* <p className="mr-4 font-semibold text-xs">
        Filter
      </p> */}

      <small className={`${active ? 'rotate-180' : ''} transition`}>
        <ArrowDownSVG className={`fill-transparent stroke-brightPurple`} />
      </small>
    </button>
  );
}