import { GiBookStorm } from 'react-icons/gi';
import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: 'Source Serif Pro', serif;
  color: ${({ theme }) => theme.colors.text};

  span {
    font-size: 20px;
  }
`;

export const LogoIcon = styled(GiBookStorm)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.accent};
`;
