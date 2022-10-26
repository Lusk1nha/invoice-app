import { LogoSVG } from "../../Icons/LogoSVG";

export function LogoButton() {
  const handleClick = () => {

  };

  return (
    <button
      type="button"
      title="Click here to go to homepage"
      role="button"
      onClick={handleClick}
      className="w-full h-full bg-brightPurple rounded-r-[20px] flex justify-center items-center relative cursor-pointer overflow-hidden after:bg-violetsAreBlue after:absolute after:w-full after:h-full after:top-[50%] after:rounded-tl-[20px] after:rounded-br-[20px]"
    >
      <LogoSVG className="w-[28px] h-[26px] fill-white z-10" />
    </button>
  );
}