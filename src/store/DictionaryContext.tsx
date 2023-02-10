import { createContext, useState } from 'react';
import { getWordMeaning } from '../api/dictionary-service';
import { DictionaryException } from '../api/DictionaryException';
import { Dictionary, ErrorProps } from '../types/types';

interface ChildrenProps {
  children: React.ReactNode;
}

interface DictionaryContextProps {
  dictData: {
    data: Dictionary[];
    hasData: boolean;
  };
  loading: boolean;
  error: { hasError: boolean; error: ErrorProps };
  resetError: () => void;
  fetchData: (word: string) => {};
}

export const DictionaryContext = createContext({} as DictionaryContextProps);

const DictionaryProvider = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = useState(false);
  const [dictData, setDictData] = useState({
    data: {} as Dictionary[],
    hasData: false,
  });
  const [error, setError] = useState({
    hasError: false,
    error: {} as ErrorProps,
  });

  const resetError = () => {
    setError({ hasError: false, error: {} as ErrorProps });
  };

  const fetchData = async (word: string) => {
    let response;
    try {
      setLoading(true);
      response = await getWordMeaning(word);
    } catch (error: any) {
      setError({ hasError: true, error: error.response.data });
      throw new DictionaryException(error.response.data.message);
    } finally {
      setLoading(false);
      if (response) {
        setDictData({ data: response, hasData: true });
      }
    }
  };

  return (
    <DictionaryContext.Provider
      value={{ dictData, loading, error, fetchData, resetError }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
