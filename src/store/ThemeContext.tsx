import { createContext, useState } from 'react';
import DarkTheme from '../themes/dark';
import LightTheme from '../themes/light';

interface ChildrenProps {
  children: React.ReactNode;
}

export interface ThemeContextProps {
  toggleTheme: () => void;
  theme: ThemeProps;
}

export interface ThemeProps {
  name: string;
  colors: {
    accent: string;
    background: string;
    text: string;
    secondary: string;
  };
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState(() => {
    const themeSaved = localStorage.getItem('@wonderword:theme');

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return DarkTheme;
    }
  });

  const toggleTheme = () => {
    if (theme.name === 'dark') {
      setTheme(LightTheme);
      localStorage.setItem('@wonderword:theme', JSON.stringify(LightTheme));
    } else {
      setTheme(DarkTheme);
      localStorage.setItem('@wonderword:theme', JSON.stringify(DarkTheme));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
