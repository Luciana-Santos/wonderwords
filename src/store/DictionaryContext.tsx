import { createContext, useState } from 'react';
import { getWordMeaning } from '../api/glossary-service';
import { Dictionary } from '../types/types';

interface ChildrenProps {
  children: React.ReactNode;
}

interface DictionaryContextProps {
  dictData: Dictionary[];
  loading: boolean;
  error: boolean;
  hasData: boolean;
  fetchData: (word: string) => {};
}

export const DictionaryContext = createContext({} as DictionaryContextProps);

const DictionaryProvider = ({ children }: ChildrenProps) => {
  const [dictData, setDictData] = useState({} as Dictionary[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasData, setHasData] = useState(false);

  const fetchData = async (word: string) => {
    let response;
    try {
      setLoading(true);
      response = await getWordMeaning(word);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(true);
      if (response) {
        setDictData(response);
        setHasData(true);
      }
    }
  };

  return (
    <DictionaryContext.Provider
      value={{ dictData, loading, hasData, error, fetchData }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
