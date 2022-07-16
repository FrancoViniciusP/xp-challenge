import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { PASSWORD_MIN, REGEX_VALIDATION } from '../helpers/constants';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const emailSaved = getLocalStorage('email');
    setUserInfo((prevState) => ({
      ...prevState,
      email: emailSaved,
    }));
  }, []);

  useEffect(() => {
    const { email, password } = userInfo;
    const correctInfos = REGEX_VALIDATION.test(email) && password.length > PASSWORD_MIN;
    setIsButtonDisabled(!correctInfos);
  }, [userInfo]);

  function handleChange({ target: { name, value } }) {
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLocalStorage('email', userInfo.email);
    navigate('/carteira');
  }

  return (
    <form type="submit" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input name="email" type="text" value={userInfo.email} onChange={handleChange} />
      </label>
      <label htmlFor="password">
        Senha
        <input name="password" type="password" value={userInfo.password} onChange={handleChange} />
      </label>

      <button type="submit" aria-label="entrar" disabled={isButtonDisabled}> ENTRAR</button>

      <p>
        Esqueceu a senha?
        <strong> Clique Aqui</strong>
      </p>

    </form>

  );
}
