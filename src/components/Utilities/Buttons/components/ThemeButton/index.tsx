import { SunSVG } from '../../../../Icons/components/SunSVG';
import { MoonSVG } from '../../../../Icons/components/MoonSVG';

import useTheme from '../../../../../hooks/useTheme';

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
      title="Click to change site theme"
      aria-label="Click to change site theme"
      role="button"
      onClick={handleClick}>
        {
          theme === 'light'
          ? <SunSVG className="fill-ube group-hover:fill-lavender transition" />
          : <MoonSVG className="fill-coolGrey-400 group-hover:fill-lavender transition" />
        }
    </button>
  );
};