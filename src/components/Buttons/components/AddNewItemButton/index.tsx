import { ButtonHTMLAttributes } from "react";
import { ButtonProps } from "../../models/ButtonProps";

interface AddNewItemButtonProps extends ButtonProps {
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
};

export function AddNewItemButton(props: AddNewItemButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {

  const handleClick = () => {
    props.setItems(items => [...items, {}])
  };

  return(
    <button {...props} onClick={handleClick} />
  );
};