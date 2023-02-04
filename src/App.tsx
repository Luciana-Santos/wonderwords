import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Container, GlobalStyles } from './GlobalStyled';
import { FontFamilyContext } from './store/FontFamilyContext';
import { ThemeContext } from './store/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { fontSelected } = useContext(FontFamilyContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles fontSelected={fontSelected} />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
export default App;
