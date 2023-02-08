import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import ThemeContext from '../../contexts/ThemeContext';

function ToggleTheme() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button className="toggle-theme" onClick={toggleTheme} type="button">{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>
  );
}

export default ToggleTheme;
