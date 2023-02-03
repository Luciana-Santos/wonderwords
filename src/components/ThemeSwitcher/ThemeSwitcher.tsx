import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../store/ThemeContext';

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        checked={theme.name === 'dark'}
        onChange={toggleTheme}
        offColor={theme.colors.secondary}
        onColor={theme.colors.secondary}
        uncheckedIcon={false}
        checkedIcon={false}
        onHandleColor={theme.colors.accent}
        offHandleColor={theme.colors.accent}
      />
    </>
  );
};
export default ThemeSwitcher;
