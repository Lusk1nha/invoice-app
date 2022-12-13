import { ButtonHTMLAttributes, useContext } from 'react';
import { ModalContext } from '../../../../../context/components/ModalProvider';
import { ButtonProps } from '../../models/ButtonProps';
import { ArrowLeftSVG } from './../../../../Icons/components/ArrowLeftSVG/index';

export function GoBackButton(props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button {...props}>
      <div className="w-2 h-2 flex justify-center items-center mr-4">
        <ArrowLeftSVG className="fill-none stroke-brightPurple" />
      </div>

      <p className="text-center text-xs text-chineseBlack dark:text-white font-bold tracking-[-0.25px]">
        Go back
      </p>
    </button>
  );
}