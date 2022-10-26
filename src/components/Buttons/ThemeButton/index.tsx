import MoonLogo from '../../../assets/icon-moon.svg';
import SunLogo from '../../../assets/icon-sun.svg';
import { SunSVG } from '../../Icons/SunSVG';

import useTheme from './../../../hooks/useTheme';
import { MoonSVG } from './../../Icons/MoonSVG';

export function ThemeButton() {
  const [theme, setTheme] = useTheme();

  const handleClick = ( ) => {
    setTheme(
      theme
    )
  };

  return (
    <button 
      type="button"
      className="group w-6 h-6"
      title="Theme changer button"
      aria-label="Theme changer button"
      role="button"
      onClick={handleClick}>
        {
          theme === 'light'
          ? <MoonSVG className="fill-ube group-hover:fill-lavender transition" />
          : <SunSVG className="fill-ube group-hover:fill-lavender transition" />
        }
    </button>
  );
};