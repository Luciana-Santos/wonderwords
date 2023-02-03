import styled, { css } from 'styled-components';

export const FontSelectionStyled = styled.select`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.accent};
    border: none;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: 4px;
    cursor: pointer;
  `}
`;
