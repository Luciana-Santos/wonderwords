import { AiFillPlayCircle } from 'react-icons/ai';
import styled from 'styled-components';

export const WordSectionStyled = styled.section`
  padding-block: 40px 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const WordSectionHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  padding-bottom: 26px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const WordTitle = styled.h1`
  font-size: clamp(34px, 5vw, 44px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const WordPronunciation = styled.p`
  font-size: clamp(20px, 5vw, 22px);
  color: ${({ theme }) => theme.colors.accent};
`;

export const AudioPlayer = styled(AiFillPlayCircle)`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 46px;
  justify-self: end;
  cursor: pointer;
`;

export const WordMeaning = styled.div`
  margin-top: 40px;
`;

export const WordClass = styled.h4`
  font-style: italic;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const WordDefinitionContainer = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 20px;
`;

export const WordDefinition = styled.h5`
  font-size: 20px;
  padding-left: 16px;
  border-left: 6px solid ${({ theme }) => theme.colors.secondary};
  line-height: unset;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextExemple = styled.p`
  font-style: italic;
  font-size: 20px;
  padding-left: 20px;
  line-height: unset;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const SynonymsContainer = styled.div``;

export const SynonymsWords = styled.h5`
  font-size: 18px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};

  a {
    font-weight: 400;
    font-style: normal;
    font-weight: 400;
    border-bottom: 1px solid;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
