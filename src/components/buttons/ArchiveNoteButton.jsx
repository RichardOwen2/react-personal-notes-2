import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArchive } from 'react-icons/md';
import { archiveNote, unarchiveNote } from '../../utils/network-data';

function ArchiveNoteButton({ archive, id }) {
  const navigate = useNavigate();

  const archiveHandler = async (archive, id) => {
    if (archive) {
      const { error } = await unarchiveNote(id);
      return error;
    }
    const { error } = await archiveNote(id);
    return error;
  };

  const onArchive = async (id) => {
    const error = await archiveHandler(archive, id);
    if (!error) {
      navigate('/');
    } else {
      alert('Gagal Mengarsip Notes!');
    }
  };

  return (
    <button className="action" type="button" title="arsip" onClick={() => onArchive(id)}>
      <MdOutlineArchive />
    </button>
  );
}

ArchiveNoteButton.propTypes = {
  archive: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default ArchiveNoteButton;
