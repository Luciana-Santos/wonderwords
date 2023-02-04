import { createContext, useEffect, useState } from 'react';

interface ChildrenProps {
  children: React.ReactNode;
}

export interface FontFamilyContextProps {
  changeFontHandler: (font: string) => void;
  fontSelected: string;
}

export const FontFamilyContext = createContext({} as FontFamilyContextProps);

const FontFamilyProvider = ({ children }: ChildrenProps) => {
  const [fontSelected, setFontSelected] = useState(() => {
    const fontSaved = localStorage.getItem('@wonderword:font');
    console.log(fontSaved);

    if (fontSaved) {
      return fontSaved;
    } else {
      return 'serif';
    }
  });

  useEffect(() => {
    localStorage.setItem('@wonderword:font', fontSelected);
  }, [fontSelected]);

  const changeFontHandler = (font: string) => {
    switch (font) {
      case 'serif':
        setFontSelected("'Source Serif Pro', serif");
        localStorage.setItem('@wonderword:font', 'serif');
        break;

      case 'sans-serif':
        setFontSelected("'Josefin Sans', sans-serif");
        localStorage.setItem('@wonderword:font', 'sans-serif');
        break;

      case 'mono':
        setFontSelected("'Roboto Mono', monospace");
        localStorage.setItem('@wonderword:font', 'mono');
        break;

      default:
        setFontSelected('serif');
        localStorage.setItem('@wonderword:font', 'serif');
        break;
    }
  };

  return (
    <FontFamilyContext.Provider value={{ fontSelected, changeFontHandler }}>
      {children}
    </FontFamilyContext.Provider>
  );
};

export default FontFamilyProvider;
