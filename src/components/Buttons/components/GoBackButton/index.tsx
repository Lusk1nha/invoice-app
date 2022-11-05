import { useContext } from 'react';
import { ModalContext } from '../../../../context/ModalProvider';
import { ArrowLeftSVG } from './../../../Icons/components/ArrowLeftSVG/index';

export function GoBackButton() {
  const modalContext = useContext(ModalContext);
  
  const handleClick = () => {
    modalContext.setOpened(false);
  };  

  return (
    <button onClick={handleClick} title="Go back to home page" className="w-auto flex items-center justify-evenly" type="button">
      <div className="w-2 h-2 flex justify-center items-center mr-4">
        <ArrowLeftSVG className="fill-none stroke-brightPurple" />
      </div>

      <p className="text-center text-xs font-bold">
        Go back
      </p>
    </button>
  );
}