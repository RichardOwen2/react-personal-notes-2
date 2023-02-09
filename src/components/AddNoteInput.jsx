import React from 'react';
import PropTypes from 'prop-types';

function AddNoteInput({
  onTitleChange, onBodyChange, title, body,
}) {
  return (
    <div className="add-new-page__input">
      <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={onTitleChange} />
      <textarea className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ...." value={body} onChange={onBodyChange} />
    </div>
  );
}

AddNoteInput.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default AddNoteInput;
