import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';

function AddNoteButton() {
  return (
    <Link to="/notes/new">
      <button className="action" type="button" title="tambah">
        <HiPlus />
      </button>
    </Link>
  );
}

export default AddNoteButton;
