import {
  AudioPlayer,
  SynonymsWords,
  TextExemple,
  WordClass,
  WordDefinition,
  WordDefinitionContainer,
  WordMeaning,
  WordPronunciation,
  WordSectionHeader,
  WordSectionStyled,
  WordTitle,
} from './WordSection.styled';

const WordSection = () => {
  return (
    <WordSectionStyled>
      <WordSectionHeader>
        <div>
          <WordTitle>wonder</WordTitle>
          <WordPronunciation>/ˈwʌndə/</WordPronunciation>
        </div>
        <AudioPlayer />
      </WordSectionHeader>
      <WordMeaning>
        <WordClass>noun</WordClass>
        <WordDefinitionContainer>
          <WordDefinition>
            something that causes amazement or awe; a marvel
          </WordDefinition>
          <TextExemple>
            Wonders of the World seem to come in sevens.
          </TextExemple>
        </WordDefinitionContainer>
        <WordDefinitionContainer>
          <WordDefinition>
            something astonishing and seemingly inexplicable
          </WordDefinition>
          <TextExemple>
            The idea was so crazy that it is a wonder that anyone went along
            with it.
          </TextExemple>
        </WordDefinitionContainer>
      </WordMeaning>

      <WordMeaning>
        <WordClass>verb</WordClass>
        <WordDefinitionContainer>
          <WordDefinition>
            to be affected with surprise or admiration; to be struck with
            astonishment; to be amazed; to marvel; often followed by at
          </WordDefinition>
          <TextExemple>
            The idea was so crazy that it is a wonder that anyone went along
            with it.
          </TextExemple>

          <SynonymsWords>
            Synonyms: <a href="#">words, newWord</a>
          </SynonymsWords>
        </WordDefinitionContainer>
        <WordDefinitionContainer>
          <WordDefinition>
            to ponder; to feel doubt and curiosity; to query in the mind
          </WordDefinition>
          <TextExemple>
            He wondered whether penguins could fly. She had wondered this
            herself sometimes.
          </TextExemple>

          <SynonymsWords>
            Synonyms: <a href="#">words, newWord</a>
          </SynonymsWords>
        </WordDefinitionContainer>
      </WordMeaning>
    </WordSectionStyled>
  );
};
export default WordSection;
