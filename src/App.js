import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/network-data';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddNote from './pages/AddNotePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import Navigation from './components/Navigation';
import LogoutButton from './components/buttons/LogoutButton';
import ToggleTheme from './components/buttons/ToggleTheme';
import ToggleLocale from './components/buttons/ToggleLocale';

import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import useToogle from './hooks/useToogle';

function App() {
  const [user, setUser] = React.useState(null);
  const [theme, toggleTheme] = useToogle('theme', 'light', 'dark');
  const [locale, toggleLocale] = useToogle('locale', 'id', 'en');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserLogged();
      setUser(data);
      setLoading(false);
    };

    getUser();
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themeContextValue = React.useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  const localeContextValue = React.useMemo(() => ({
    locale,
    toggleLocale,
  }), [locale]);

  const onSuccessLogin = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setUser(data);
  };

  const onLogOut = () => {
    setUser(null);
    putAccessToken('');
  };

  const ind = locale === 'id';

  if (loading) {
    return null;
  }

  if (!user) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">{ind ? 'Aplikasi Catatan' : 'Notes App'}</Link>
              </h1>
              <ToggleLocale />
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onSuccessLogin} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className="app-container">
          <header>
            <h1>
              <Link to="/">{ind ? 'Aplikasi Catatan' : 'Notes App'}</Link>
            </h1>
            <Navigation />
            <ToggleLocale />
            <ToggleTheme />
            <LogoutButton name={user.name} logout={onLogOut} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/archives" element={<ArchivePage />} />
              <Route path="/notes/new" element={<AddNote />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
