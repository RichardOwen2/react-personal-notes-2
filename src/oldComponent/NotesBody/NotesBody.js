import React from 'react';
import NotesInput from './NotesInput/NotesInput';
import NotesList from './NotesList/NotesList';

function NotesBody({
  notes, addNote, onDelete, onArchive, dateFormat,
}) {
  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList
        notes={notes.filter((note) => !note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}
        dateFormat={dateFormat}
      />
      <h2>Arsip</h2>
      <NotesList
        notes={notes.filter((note) => note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}
        dateFormat={dateFormat}
      />
    </div>
  );
}

export default NotesBody;
