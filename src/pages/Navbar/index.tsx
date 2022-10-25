import useTheme from "../../hooks/useTheme";

export function Navbar() {
  const [theme, setTheme] = useTheme();

  const handleClick = () => {
    setTheme(theme);
  };

  return (
    <nav className="w-full md:w-[103px] h-72 md:h-full bg-tealishBlue-600 flex md:flex-col md:rounded-r-[20px] md:pb-6">
      <section className="grow flex justify-between items-center md:flex-col pr-5 md:p-0">
        <div className="w-72 md:w-[103px] h-full md:h-[103px] bg-brightPurple rounded-r-[20px]">

        </div>
        
        <div className="w-14 h-14 flex justify-center items-center p-1">
          <button onClick={handleClick}>Tema</button>
        </div>
      </section>

      <section className="w-full max-w-[80px] md:max-w-none border-l-2 border-tealishBlue-400 flex justify-center items-center">
        <div className="w-8 h-8 bg-white rounded-full">
        </div>
      </section>
    </nav>
  );
};