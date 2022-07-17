import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatter from '../helpers/functions';
import ButtonsDiv from '../styles/elements/ButtonsDiv';
import UserMessage from '../styles/elements/UserMessage';

export default function CashInfos({ props }) {
  const [amount, setAmount] = useState(2000.01);
  const {
    leftButtonName, rightButtonName, leftClick, rightClick, leftType, rightType,
  } = props;

  useState(() => {
    const convert = formatter.format(amount);
    setAmount(convert);
  }, []);

  return (
    <span>
      <UserMessage>Saldo disponível</UserMessage>
      <h1>{`R$ ${amount}`}</h1>
      <ButtonsDiv>
        <button className={leftType} type="button" onClick={leftClick}>{leftButtonName}</button>
        <button className={rightType} type="button" onClick={rightClick}>{rightButtonName}</button>
      </ButtonsDiv>
    </span>
  );
}

CashInfos.propTypes = {
  props: {
    leftButtonName: PropTypes.string,
    rightButtonName: PropTypes.string,
    leftType: PropTypes.string,
    rightType: PropTypes.string,
    leftClick: PropTypes.func,
    rightClick: PropTypes.func,
  },
}.isRequired;
