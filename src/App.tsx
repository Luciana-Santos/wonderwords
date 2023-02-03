import Header from './components/Header/Header';
import { Container, GlobalStyles } from './GlobalStyled';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </>
  );
};
export default App;
