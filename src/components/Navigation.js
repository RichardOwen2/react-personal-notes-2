import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function Navigation() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archived'}</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
