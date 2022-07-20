import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import GeneralButton from '../styles/elements/GeneralButton';
import { deposit, withdraw } from '../redux/reducers/clientInfos';

export default function TransferMoney({ props }) {
  const { isWithdraw } = props;
  const freeAmount = useSelector((state) => state.clientInfos.freeAmount);
  const [inputValue, setInputValue] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isWithdraw) {
      if (inputValue > +freeAmount || inputValue < 0) {
        setIsDisabled(true);
      } else { setIsDisabled(false); }
    } else { setIsDisabled(false); }
  }, [isWithdraw, inputValue, freeAmount]);

  function setValue({ target: { value } }) {
    setInputValue(value);
  }

  function handleClick() {
    if (!isWithdraw) {
      return store.dispatch(deposit(inputValue));
    }
    return store.dispatch(withdraw(inputValue));
  }

  return (
    <div>
      <input type="number" value={inputValue} onChange={(e) => setValue(e)} />
      {isDisabled && isWithdraw && <p>Valor insuficiente</p>}
      <GeneralButton disabled={isDisabled} type="reset" onClick={() => handleClick()}>CONFIRMAR</GeneralButton>
    </div>
  );
}

TransferMoney.propTypes = {
  isWithdraw: PropTypes.bool,
}.isRequired;
