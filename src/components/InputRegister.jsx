/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function InputRegister({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      return register({ name, email, password });
    }

    alert('Password and password confirm must be same!');
    return null;
  };

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange} />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />
      <button type="button" onClick={onSubmit}>Register</button>
    </div>
  );
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
