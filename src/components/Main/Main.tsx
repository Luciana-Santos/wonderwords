import Search from '../Search/Search';
import WordSection from '../WordSection/WordSection';
import { MainStyled } from './Main.styled';

const Main = () => {
  return (
    <MainStyled>
      <Search />
      <WordSection />
    </MainStyled>
  );
};
export default Main;
