import { FiSearch } from 'react-icons/fi';
import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
    border: none;
    font-size: 16px;
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    border: 1px solid transparent;

    &:focus,
    &:hover {
      outline: none;
      border-color: ${theme.colors.accent};
    }
  `}
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  height: 100%;
  width: 42px;
  padding-inline: 10px;
`;
