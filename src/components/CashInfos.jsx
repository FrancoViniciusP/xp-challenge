import React from 'react';
import { Skeleton } from '@mui/material';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ButtonsDiv from '../styles/elements/ButtonsDiv';
import UserMessage from '../styles/elements/UserMessage';

export default function CashInfos({ props }) {
  const freeAmount = useSelector((state) => state.clientInfos.freeAmount);
  const {
    leftButtonName, rightButtonName, leftClick, rightClick, leftType, rightType,
    hideValues,
  } = props;

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
          : <h1 data-testid="free-amount">{`R$ ${freeAmount}`}</h1>}
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
