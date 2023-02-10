import styled from 'styled-components';

export const ErrorStyled = styled.div`
  height: calc(100vh - 362px);

  @media (min-width: 33.75em) {
    height: calc(100vh - 312px);
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  span {
    font-size: 30px;
  }
`;

export const ErrorMessageTitle = styled.h1`
  font-size: 22px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
`;

export const ErrorResolution = styled.p``;
