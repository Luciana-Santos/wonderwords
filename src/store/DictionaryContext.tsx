import { createContext, useState } from 'react';
import { getGlossary } from '../api/glossary-service';

interface ChildrenProps {
  children: React.ReactNode;
}

export interface WordInfoProps {
  word: string;
}

interface DictionaryContextProps {
  data: WordInfoProps;
  loading: boolean;
  error: boolean;
  fetchData: (word: string) => {};
}

export const DictionaryContext = createContext({} as DictionaryContextProps);

const DictionaryProvider = ({ children }: ChildrenProps) => {
  const [data, setData] = useState({} as WordInfoProps);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);

  const fetchData = async (word: string) => {
    let response;
    try {
      setLoading(true);
      response = await getGlossary(word);
    } catch (error) {
      seterror(true);
      console.log(error);
    } finally {
      seterror(false);
      setLoading(false);
      setData(response?.data);
    }
  };

  return (
    <DictionaryContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
