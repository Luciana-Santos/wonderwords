import { useContext, useState } from 'react';
import { DictionaryContext } from '../../store/DictionaryContext';
import { InputStyled, SearchIcon } from '../UI/Input/Input';
import { SearchButton, SearchStyled } from './Search.styled';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const { fetchData } = useContext(DictionaryContext);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchValue || searchValue.length === 0) return;

    fetchData(searchValue);
  };

  return (
    <SearchStyled>
      <form onSubmit={handleSearch}>
        <InputStyled
          type="text"
          value={searchValue}
          placeholder="Word"
          title="Apenas letras são permitidas"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </form>
    </SearchStyled>
  );
};
export default Search;
