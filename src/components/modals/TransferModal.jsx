import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import CashInfos from '../infos/CashInfos';
import TransferMoney from '../divs/DepositWithdraw';
import ModalButton from '../../styles/elements/ModalButton';
import { style } from '../../helpers/constants';

export default function TransferModal({ props }) {
  const { openModal, setOpenModal, hideValues } = props;
  const [isWithdraw, setIsWithdraw] = useState(true);
  const [leftButton, setLeftButton] = useState('secondary');
  const [rightButton, setRightButton] = useState('primary');

  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    if (isWithdraw) {
      setLeftButton('secondary');
      setRightButton('primary');
    } else {
      setLeftButton('primary');
      setRightButton('secondary');
    }
  }, [isWithdraw]);

  const inputProps = {
    isWithdraw,
  };

  const pageProps = {
    leftButtonName: 'DEPÓSITO',
    rightButtonName: 'RETIRADA',
    leftClick: () => setIsWithdraw(false),
    rightClick: () => setIsWithdraw(true),
    leftType: leftButton,
    rightType: rightButton,
    hideValues,
  };

  return (
    <Modal
      open={openModal}
      sx={style}
    >
      <span>
        <ModalButton type="button" onClick={handleClose}>X</ModalButton>
        <CashInfos props={pageProps} />
        <TransferMoney props={inputProps} />
      </span>
    </Modal>

  );
}

TransferModal.propTypes = {
  openModal: PropTypes.bool,
}.isRequired;
