import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
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
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
export default App;
