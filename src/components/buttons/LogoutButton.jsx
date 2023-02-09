import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';

function LogoutButton({ name, logout }) {
  return (
    <button className="button-logout" onClick={logout} type="button">
      <FiLogOut />
      {' '}
      {name}
    </button>
  );
}

LogoutButton.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default LogoutButton;
