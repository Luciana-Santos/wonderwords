import FontSelection from '../FontSelection/FontSelection';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { Logo, LogoIcon } from '../UI/Logo/Logo';
import { ActionContainer, HeaderStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo href="/">
        <LogoIcon />
        <span>WonderWords</span>
      </Logo>
      <ActionContainer>
        <FontSelection />
        <ThemeSwitcher />
      </ActionContainer>
    </HeaderStyled>
  );
};
export default Header;
