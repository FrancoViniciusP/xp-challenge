import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import CashInfos from './CashInfos';
import TransferMoney from './TransferMoney';
import ModalButton from '../styles/elements/ModalButton';

const style = {
  display: 'block',
  margin: 'auto',
  padding: '20px 0',
  maxWidth: '400px',
  minHeight: '500px',
  width: 0.9,
  height: '70%',
  bgcolor: 'var(--black-secondary)',
};

export default function BasicModal({ props }) {
  const {
    openModal, setOpenModal, isNegociation, stock,
  } = props;
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
    isNegociation,
  };

  const pageProps = {
    leftButtonName: 'DEPÓSITO',
    rightButtonName: 'RETIRADA',
    leftClick: () => setIsWithdraw(false),
    rightClick: () => setIsWithdraw(true),
    leftType: leftButton,
    rightType: rightButton,
    isNegociation,
    stock,
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

BasicModal.propTypes = {
  openModal: PropTypes.bool,
}.isRequired;
