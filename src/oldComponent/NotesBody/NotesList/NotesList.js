import React from 'react';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';

function NotesList({
  notes, onDelete, onArchive, dateFormat,
}) {
  if (notes.length === 0) {
    return (
      <EmptyMessage />
    );
  }

  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem
            {...note}
            key={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            dateFormat={dateFormat}
          />
        ))
      }
    </div>
  );
}

export default NotesList;
