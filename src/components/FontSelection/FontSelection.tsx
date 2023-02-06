import { useContext } from 'react';
import { FontFamilyContext } from '../../store/FontFamilyContext';
import { FontSelectionStyled } from './FontSelection.styled';

const FontSelection = () => {
  const { changeFontHandler } = useContext(FontFamilyContext);

  const handleFontSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFontHandler(e.target.value);
  };

  return (
    <FontSelectionStyled onChange={handleFontSelection}>
      <option value="serif">serif</option>
      <option value="sans-serif">sans-serif</option>
      <option value="mono">mono</option>
    </FontSelectionStyled>
  );
};
export default FontSelection;
