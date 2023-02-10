import { useContext } from 'react';
import { DictionaryContext } from '../../store/DictionaryContext';
import {
  AudioPlayer,
  SentenceDefition,
  SynonymsContainer,
  SynonymWord,
  TextExemple,
  WordClass,
  WordDefinitionContainer,
  WordMeaning,
  WordPronunciation,
  WordSectionHeader,
  WordSectionStyled,
  WordTitle,
} from './WordSection.styled';

const WordSection = () => {
  const { dictData, fetchData } = useContext(DictionaryContext);
  const { meanings, phonetics, phonetic, word } = dictData.data[0];

  const handleSynonyms = (event: React.MouseEvent<HTMLSpanElement>) => {
    const textContent = event.currentTarget.textContent || '';
    fetchData(textContent);
  };

  let audio;
  {
    phonetics.map((phonetic) => {
      audio = phonetic?.audio;
    });
  }
  const audioPlayer = new Audio(audio);

  return (
    <WordSectionStyled>
      <WordSectionHeader>
        <div>
          <WordTitle>{word}</WordTitle>
          <WordPronunciation>{phonetic}</WordPronunciation>
        </div>
        {audioPlayer && <AudioPlayer onClick={() => audioPlayer.play()} />}
      </WordSectionHeader>
      {meanings.map((mean, i) => {
        return (
          <WordMeaning key={mean.partOfSpeech + i}>
            <WordClass>{mean.partOfSpeech}</WordClass>
            {mean.definitions.map((definition) => {
              return (
                <WordDefinitionContainer key={definition.definition}>
                  <SentenceDefition>{definition.definition}</SentenceDefition>
                  {definition.example ? (
                    <TextExemple>{definition.example}</TextExemple>
                  ) : null}

                  {definition.synonyms.length >= 1 ? (
                    <SynonymsContainer>
                      Synonyms:
                      {definition.synonyms.map((synonym, i) => {
                        return (
                          <SynonymWord
                            key={synonym + i}
                            onClick={handleSynonyms}
                          >
                            {synonym}
                          </SynonymWord>
                        );
                      })}
                    </SynonymsContainer>
                  ) : null}
                </WordDefinitionContainer>
              );
            })}
          </WordMeaning>
        );
      })}
    </WordSectionStyled>
  );
};
export default WordSection;
