import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import InputLogin from '../components/InputLogin';

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);
  const ind = locale === 'id';

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="login-page">
      <h2>{ind ? 'Yuk, login untuk menggunakan aplikasi.' : 'Login to use app, please.'}</h2>
      <InputLogin login={onLogin} />
      <p>
        {ind ? 'Belum punya akun?' : "Don't have an account?"}
        {' '}
        <Link to="/register">{ind ? 'Daftar di sini' : 'Register here'}</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
