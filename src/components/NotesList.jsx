import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';
import LoadingMessage from './LoadingMessage';

function NotesList({ notes, loading }) {
  if (loading) {
    return (
      <LoadingMessage />
    );
  }

  if (notes.length === 0) {
    return (
      <EmptyMessage />
    );
  }

  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <NoteItem {...note} key={note.id} />
        ))
      }
    </div>
  );
}

NotesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NotesList;
