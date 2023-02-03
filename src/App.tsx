import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Container, GlobalStyles } from './GlobalStyled';
import { ThemeContext } from './store/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
      </Container>
    </ThemeProvider>
  );
};
export default App;
