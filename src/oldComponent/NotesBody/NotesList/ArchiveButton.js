import React from 'react';

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button
      type="button"
      className="note-item__archive-button"
      onClick={() => onArchive(id)}
    >
      {!archived ? 'Arsipkan' : 'Pindahkan'}
    </button>
  );
}

export default ArchiveButton;
