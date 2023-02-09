import styled from 'styled-components';

export const DefaultViewStyled = styled.div`
  height: calc(100vh - 332px);

  @media (min-width: 33.75em) {
    height: calc(100vh - 282px);
  }
`;

export const DefaultViewText = styled.h1`
  margin-top: 30px;
  font-size: 18px;
  text-align: center;
`;
