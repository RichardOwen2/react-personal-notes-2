import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { deleteNote } from '../../utils/network-data';

function DeleteNoteButton({ id }) {
  const navigate = useNavigate();

  const onDelete = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      navigate('/');
    } else {
      alert('Gagal Menghapus Notes!');
    }
  };

  return (
    <button className="action" type="button" title="delete" onClick={() => onDelete(id)}>
      <MdDeleteOutline />
    </button>
  );
}

DeleteNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteNoteButton;
