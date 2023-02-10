import {
  ErrorMessage,
  ErrorStyled,
  Grid,
  TryAgainMessage,
} from './Error.styled';

const Error = () => {
  return (
    <ErrorStyled>
      <Grid>
        <span>😔</span>
        <ErrorMessage>Ops, something went wrong here.</ErrorMessage>
        <TryAgainMessage>Try again!</TryAgainMessage>
      </Grid>
    </ErrorStyled>
  );
};
export default Error;
