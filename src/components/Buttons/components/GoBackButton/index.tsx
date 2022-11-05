import { ButtonHTMLAttributes, useContext } from 'react';
import { ModalContext } from '../../../../context/ModalProvider';
import { ButtonProps } from '../../models/ButtonProps';
import { ArrowLeftSVG } from './../../../Icons/components/ArrowLeftSVG/index';

export function GoBackButton(props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const modalContext = useContext(ModalContext);
  
  const handleClick = () => {
    modalContext.setOpened(false);
  };  

  return (
    <button {...props} onClick={handleClick}>
      <div className="w-2 h-2 flex justify-center items-center mr-4">
        <ArrowLeftSVG className="fill-none stroke-brightPurple" />
      </div>

      <p className="text-center text-xs text-chineseBlack dark:text-white font-bold tracking-[-0.25px]">
        Go back
      </p>
    </button>
  );
}