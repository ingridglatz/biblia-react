import { useEffect, useState } from 'react';

export const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setMode('dark') : setMode('light');
  };

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};
