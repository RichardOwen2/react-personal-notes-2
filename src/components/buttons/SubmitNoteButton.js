import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiCheckLine } from "react-icons/ri";

function SubmitNoteButton({ onSubmit }) {
  return (
    <Link to="/">
      <button className="action" type="button" title="simpan" onClick={() => onSubmit()}>
        <RiCheckLine />
      </button>
    </Link>
  );
}

SubmitNoteButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SubmitNoteButton;