import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding-block: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  a {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
