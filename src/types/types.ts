export interface Dictionary {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  example?: string;
}

export interface Phonetic {
  text: string;
  audio: string;
}
