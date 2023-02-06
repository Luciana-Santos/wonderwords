import { WordInfoProps } from '../store/DictionaryContext';
import { apiGlossary } from './api';

export const getGlossary = async (word: string) => {
  const data = await apiGlossary.get<WordInfoProps>(`${word}`);
  return data;
};
