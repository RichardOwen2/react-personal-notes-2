import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({
  id, title, createdAt, body, archived, onDelete, onArchive, dateFormat,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{dateFormat(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton onDelete={onDelete} id={id} />
        <ArchiveButton onArchive={onArchive} archived={archived} id={id} />
      </div>
    </div>
  );
}

export default NoteItem;
