import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { Container, GlobalStyles } from './GlobalStyled';
import { ThemeContext } from './store/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};
export default App;
