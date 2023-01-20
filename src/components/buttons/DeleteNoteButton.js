import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";

function DeleteNoteButton({ onDelete }) {
  return (
    <Link to="/">
      <button className="action" type="button" title="simpan" onClick={() => onDelete()}>
        <MdDeleteOutline />
      </button>
    </Link>
  );
}

DeleteNoteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

export default DeleteNoteButton;