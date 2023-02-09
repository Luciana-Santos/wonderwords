import { Dictionary } from '../types/types';
import { apiGlossary } from './api';

export const getWordMeaning = async (params: string): Promise<Dictionary[]> => {
  const { data } = await apiGlossary.get<Dictionary[]>(params);
  return data;
};
