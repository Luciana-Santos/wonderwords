import axios from 'axios';

export const apiGlossary = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
});
