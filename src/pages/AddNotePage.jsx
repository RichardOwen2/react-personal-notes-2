import React from 'react';
import { addNote } from '../utils/network-data';
import useInput from '../hooks/useInput';
import AddNoteInput from '../components/AddNoteInput';
import SubmitNoteButton from '../components/buttons/SubmitNoteButton';

function AddNote() {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const onSubmit = async () => {
    await addNote({ title, body });
  };

  return (
    <div className="add-new-page">
      <AddNoteInput
        title={title}
        body={body}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
      />
      <div className="add-new-page__action">
        <SubmitNoteButton onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default AddNote;
