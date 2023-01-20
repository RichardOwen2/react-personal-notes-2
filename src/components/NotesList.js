import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';

function NotesList({ notes }) {
  if (notes.length === 0) {
    return (
      <EmptyMessage />
    );
  }

  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem {...note} key={note.id} />
        ))
      }
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList;
