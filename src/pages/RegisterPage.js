import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import InputRegister from '../components/InputRegister';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const ind = locale === 'id';

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section className="regsiter-page">
      <h2>{ind ? 'Isi form untuk mendaftar akun.' : 'Fill the form to register account.'}</h2>
      <InputRegister register={onRegisterHandler} />
      <p>
        {ind ? 'Sudah punya akun?' : 'Already have an account?'}
        {' '}
        <Link to="/">{ind ? 'Login di sini' : 'Login Here'}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
