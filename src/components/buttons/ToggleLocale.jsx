import React, { useContext } from 'react';
import { MdGTranslate } from 'react-icons/md';
import LocaleContext from '../../contexts/LocaleContext';

function ToogleLocale() {
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <button className="toggle-locale" onClick={toggleLocale} type="button" label="toggle-locale"><MdGTranslate /></button>
  );
}

export default ToogleLocale;
