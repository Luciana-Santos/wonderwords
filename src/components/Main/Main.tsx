import { useContext } from 'react';
import { DictionaryContext } from '../../store/DictionaryContext';
import DefaultView from '../DefaultView/DefaultView';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Search from '../Search/Search';
import WordSection from '../WordSection/WordSection';
import { MainStyled } from './Main.styled';

const Main = () => {
  const { dictData, loading, error } = useContext(DictionaryContext);

  return (
    <MainStyled>
      <Search />
      {!error.hasError && !dictData.hasData && !loading && <DefaultView />}
      {dictData.hasData && !error.hasError && <WordSection />}
      {error.hasError && <Error />}
      {loading && <Loading />}
    </MainStyled>
  );
};
export default Main;
