import { LogoButton } from "../../components/Buttons/components/LogoButton";
import { ThemeButton } from "../../components/Buttons/components/ThemeButton";

import { AvatarButton } from '../../components/Buttons/components/AvatarButton/index';

export function Navbar() {
  return (
    <nav className="w-full lg:w-[103px] h-72 md:h-[80px] lg:h-full bg-tealishBlue-600 dark:bg-yankeesBlue-600 flex lg:flex-col lg:rounded-r-[20px] transition z-50">
      <section className="grow flex justify-between items-center lg:flex-col pr-5 lg:pb-6 lg:pr-0">
        <div className="w-72 md:w-[80px] lg:w-[103px] h-full lg:h-[103px]">
          <LogoButton />
        </div>

        <div className="w-auto h-auto flex justify-center items-center"> 
          <ThemeButton />
        </div>
      </section>

      <section className="w-full max-w-[80px] lg:max-w-none lg:h-[80px] border-l-2 lg:border-t-[1px] lg:border-l-0 border-tealishBlue-400 flex justify-center items-center">
        <AvatarButton />
      </section>
    </nav>
  );
};