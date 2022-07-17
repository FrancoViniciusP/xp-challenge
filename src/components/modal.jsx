// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import CashInfos from './CashInfos';
import TransferMoney from './TransferMoney';

const style = {
  display: 'block',
  margin: 'auto',
  padding: '20px 0',
  maxWidth: '500px',
  width: 0.9,
  height: '70%',
  bgcolor: 'var(--black-secondary)',
};

export default function BasicModal({ props }) {
  const { openModal, setOpenModal } = props;
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

  const pageProps = {
    leftButtonName: 'DEPÓSITO',
    rightButtonName: 'RETIRADA',
    leftClick: () => setIsWithdraw(false),
    rightClick: () => setIsWithdraw(true),
    leftType: leftButton,
    rightType: rightButton,
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      sx={style}
    >
      <span>
        <CashInfos props={pageProps} />
        <TransferMoney isWithdraw={isWithdraw} />
      </span>
    </Modal>

  );
}

BasicModal.propTypes = {
  openModal: PropTypes.bool,
}.isRequired;
