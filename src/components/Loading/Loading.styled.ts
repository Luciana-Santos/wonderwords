import styled from 'styled-components';

export const LoadingContainer = styled.div`
  height: calc(100vh - 362px);
  display: grid;
  place-content: center;
  text-align: center;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.text};
      stroke-width: 1.6px;
    }
  }

  @media (min-width: 33.75em) {
    height: calc(100vh - 312px);
  }
`;
