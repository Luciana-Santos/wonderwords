import { InputStyled, SearchIcon } from '../UI/Input/Input';
import { SearchStyled } from './Search.styled';

const Search = () => {
  return (
    <SearchStyled>
      <InputStyled type="text" placeholder="Word" />
      <SearchIcon />
    </SearchStyled>
  );
};
export default Search;
