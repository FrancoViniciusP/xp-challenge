import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PASSWORD_MIN, REGEX_VALIDATION } from '../helpers/constants';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';
import LoginButton from '../styles/elements/LoginButton';

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const emailSaved = getLocalStorage('email') || '';
    setUserEmail(emailSaved);
  }, []);

  useEffect(() => {
    const correctInfos = REGEX_VALIDATION.test(userEmail) && userPassword.length > PASSWORD_MIN;
    setIsButtonDisabled(!correctInfos);
  }, [userEmail, userPassword]);

  function handleChange({ target: { name, value } }) {
    if (name === 'email') {
      setUserEmail(value);
    } else { setUserPassword(value); }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLocalStorage('email', userEmail);
    setRedirect(true);
  }

  return (
    <div>
      {redirect && <Navigate to="/carteira" />}

      <form type="submit" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            data-testid="email"
            name="email"
            type="text"
            value={userEmail}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="password"
            name="password"
            type="password"
            value={userPassword}
            onChange={handleChange}
          />
        </label>

        <LoginButton
          type="submit"
          aria-label="entrar"
          disabled={isButtonDisabled}
        >
          ENTRAR
        </LoginButton>

        <p>
          Esqueceu a senha?
          <strong> Clique Aqui</strong>
        </p>
        <hr />
      </form>
    </div>
  );
}
