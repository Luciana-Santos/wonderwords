import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Josefin sans', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    transition: .3s ease;
    display: inline-block;
  }

  ul {
    list-style: none;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    position: relative;
    color: #cecccf;
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Josefin sans', sans-serif;
  }
`;

export const Container = styled.div`
  width: min(100% - 2rem, 42rem);
  margin-inline: auto;
`;
