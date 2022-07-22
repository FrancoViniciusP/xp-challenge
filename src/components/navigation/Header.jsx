import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BodyHeader from '../../styles/elements/BodyHeader';
import LogoHeader from '../../styles/elements/LogoHeader';
import UserMessage from '../../styles/elements/UserMessage';
import HrLogin from '../../styles/elements/HrLogin';

export default function Header({ setHide }) {
  const name = useSelector((state) => state.clientInfos.name);
  const [toogle, setToogle] = useState(true);

  function handleToogle() {
    setToogle((prevState) => !prevState);
    setHide((prevState) => !prevState);
  }

  return (
    <BodyHeader>
      <LogoHeader src="xp_icon_white.png" alt="logo xp investimentos" />
      <UserMessage>
        {`Olá, ${name}`}
        <HrLogin />
      </UserMessage>

      <button data-testid="hide-numbers" type="button" onClick={handleToogle}>
        <img src={`${toogle}-eye.svg`} alt="esconder números" />
      </button>
    </BodyHeader>
  );
}

Header.propTypes = {
  setHide: PropTypes.func,
}.isRequired;
