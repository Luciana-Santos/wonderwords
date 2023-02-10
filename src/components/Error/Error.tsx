import { useContext } from 'react';
import { DictionaryContext } from '../../store/DictionaryContext';
import {
  ErrorMessage,
  ErrorMessageTitle,
  ErrorResolution,
  ErrorStyled,
  Grid,
} from './Error.styled';

const Error = () => {
  const { error } = useContext(DictionaryContext);
  const { error: errorData } = error;

  return (
    <ErrorStyled>
      <Grid>
        <ErrorMessageTitle>{errorData.title} 😔</ErrorMessageTitle>
        <ErrorMessage>{errorData.message}</ErrorMessage>
        <ErrorResolution>{errorData.resolution}</ErrorResolution>
      </Grid>
    </ErrorStyled>
  );
};
export default Error;
