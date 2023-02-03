import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding-block: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 33.75em) {
    justify-content: space-between;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 33.75em) {
    width: max-content;
  }
`;
