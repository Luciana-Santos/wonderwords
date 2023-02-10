import styled from 'styled-components';

export const ErrorStyled = styled.div`
  height: calc(100vh - 362px);

  @media (min-width: 33.75em) {
    height: calc(100vh - 312px);
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  span {
    font-size: 30px;
  }
`;

export const ErrorMessage = styled.h1`
  font-size: 18px;
`;

export const TryAgainMessage = styled.h4`
  margin-top: 20px;
  font-size: 16px;
`;
