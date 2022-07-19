import React, { useState } from 'react';
import { Skeleton } from '@mui/material';

import PropTypes from 'prop-types';
import formatter from '../helpers/functions';
import ButtonsDiv from '../styles/elements/ButtonsDiv';
import UserMessage from '../styles/elements/UserMessage';

export default function CashInfos({ props }) {
  const [amount, setAmount] = useState(2000.01);
  const {
    leftButtonName, rightButtonName, leftClick, rightClick, leftType, rightType,
    hideValues,
  } = props;

  useState(() => {
    const convert = formatter.format(amount);
    setAmount(convert);
  }, []);

  return (
    <span>
      <div className="infosSpace">
        <UserMessage>Saldo disponível</UserMessage>
        {hideValues
          ? (
            <Skeleton
              animation="wave"
              sx={{ bgcolor: 'grey.900', margin: 'auto' }}
              width={200}
              height={36}
              variant="rectangular"
              className="vender"
            />
          )
          : <h1>{`R$ ${amount}`}</h1>}
      </div>
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
