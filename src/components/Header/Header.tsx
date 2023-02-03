import { Logo, LogoIcon } from '../UI/Logo';
import { HeaderStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <LogoIcon />
        <span>WonderWords</span>
      </Logo>
    </HeaderStyled>
  );
};
export default Header;
