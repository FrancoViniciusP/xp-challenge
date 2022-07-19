import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BodyHeader from '../styles/elements/BodyHeader';
import LogoHeader from '../styles/elements/LogoHeader';
import UserMessage from '../styles/elements/UserMessage';
import HrLogin from '../styles/elements/HrLogin';

export default function Header({ setHide }) {
  const [userName, setUserName] = useState('Usuário');
  const [toogle, setToogle] = useState(true);

  useEffect(() => {
    setUserName('VINICIUS');
  }, []);

  function handleToogle() {
    setToogle((prevState) => !prevState);
    setHide((prevState) => !prevState);
  }

  return (
    <BodyHeader>
      <LogoHeader src="xp_icon_white.png" alt="logo xp investimentos" />
      <UserMessage>
        {`Olá, ${userName}`}
        <HrLogin />
      </UserMessage>

      <button type="button" onClick={handleToogle}>
        <img src={`${toogle}-eye.svg`} alt="esconder números" />
      </button>
    </BodyHeader>
  );
}

Header.propTypes = {
  setHide: PropTypes.func,
}.isRequired;
