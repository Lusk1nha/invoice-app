import useTheme from './../hooks/useTheme';

export function Home() {
  const [theme, setTheme] = useTheme();

  const handleClick = () => {
    setTheme(theme);
  };

  return(
    <main className="w-full h-full bg-white dark:bg-black">
      <p onClick={handleClick} className="text-black dark:text-red-900">
        Teste
      </p>
    </main>
  );
};