import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import HrLogin from '../styles/elements/HrLogin';
import LogoLogin from '../styles/elements/LogoLogin';

export default function Login() {
  return (
    <main>
      <LogoLogin src="xp_icon_white.png" alt="logo xp investimentos" />
      <HrLogin />
      <LoginForm />
    </main>
  );
}
