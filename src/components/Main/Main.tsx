import { useContext } from 'react';
import { DictionaryContext } from '../../store/DictionaryContext';
import DefaultView from '../DefaultView/DefaultView';
import Search from '../Search/Search';
import WordSection from '../WordSection/WordSection';
import { MainStyled } from './Main.styled';

const Main = () => {
  const { hasData, error } = useContext(DictionaryContext);

  return (
    <MainStyled>
      <Search />
      {hasData && !error ? <WordSection /> : <DefaultView />}
      {!hasData && error && <p>Errorrrrrrrr</p>}
    </MainStyled>
  );
};
export default Main;
