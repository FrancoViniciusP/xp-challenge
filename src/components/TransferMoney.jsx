import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GeneralButton from '../styles/elements/GeneralButton';

export default function TransferMoney({ props }) {
  const { isWithdraw } = props;
  const [withdrawValue, setWithdrawValue] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isWithdraw) {
      if (withdrawValue > 2000 || withdrawValue < 0) {
        setIsDisabled(true);
      } else { setIsDisabled(false); }
    } else { setIsDisabled(false); }
  }, [isWithdraw, withdrawValue]);

  function setValue({ target: { value } }) {
    setWithdrawValue(value);
  }

  return (
    <div>
      <input type="number" value={withdrawValue} onChange={(e) => setValue(e)} />
      {isDisabled && isWithdraw && <p>Valor insuficiente</p>}
      <GeneralButton disabled={isDisabled} type="reset">CONFIRMAR</GeneralButton>
    </div>
  );
}

TransferMoney.propTypes = {
  isWithdraw: PropTypes.bool,
}.isRequired;
