import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineArchive } from "react-icons/md";

function ArchiveNoteButton({ onArchive }) {
  return (
    <Link to="/">
      <button className="action" type="button" title="simpan" onClick={() => onArchive()}>
        <MdOutlineArchive />
      </button>
    </Link>
  );
}

ArchiveNoteButton.propTypes = {
  onArchive: PropTypes.func.isRequired,
}

export default ArchiveNoteButton;