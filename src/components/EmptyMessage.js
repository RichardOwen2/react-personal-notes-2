import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function EmptyMessage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">{locale === 'id' ? 'Tidak ada catatan' : 'No Notes'}</p>
    </section>
  );
}

export default EmptyMessage;
