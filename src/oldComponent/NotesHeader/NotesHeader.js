import React from 'react';
import NotesSearchBar from './NotesSearchBar';

function NotesHeader({ keywordChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NotesSearchBar keywordChange={keywordChange} />
    </div>
  );
}

export default NotesHeader;
