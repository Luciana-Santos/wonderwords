import { useContext } from 'react';
import { DictionaryContext } from '../../store/DictionaryContext';
import Search from '../Search/Search';
import WordSection from '../WordSection/WordSection';
import { MainStyled } from './Main.styled';

const Main = () => {
  const { data, error } = useContext(DictionaryContext);

  return (
    <MainStyled>
      <Search />
      {error ? <p>errorrrrrrrrr</p> : null}
      {data ? <WordSection /> : null}
    </MainStyled>
  );
};
export default Main;
