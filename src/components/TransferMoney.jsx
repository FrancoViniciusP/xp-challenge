import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginButton from '../styles/elements/LoginButton';

export default function TransferMoney({ isWithdraw }) {
  const [withdrawValue, setWithdrawValue] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  function setValue({ target: { value } }) {
    setWithdrawValue(value);

    if (value > 2000 || value < 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  return (
    isWithdraw
      ? (
        <div>
          <input type="number" value={withdrawValue} onChange={(e) => setValue(e)} />
          {isDisabled && (<p>Valor incorreto</p>)}

          <LoginButton disabled={isDisabled} type="reset">CONFIRMAR</LoginButton>
        </div>
      )

      : <h1>Informações para depósito</h1>
  );
}

TransferMoney.propTypes = {
  isWithdraw: PropTypes.bool,
}.isRequired;
