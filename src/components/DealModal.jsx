import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import ModalButton from '../styles/elements/ModalButton';
import UserMessage from '../styles/elements/UserMessage';
import ConfirmButton from '../styles/elements/ConfirmButton';
import TableStyle from '../styles/elements/TableStyle';

const style = {
  display: 'block',
  margin: 'auto',
  padding: '20px 0',
  maxWidth: '500px',
  width: 0.9,
  height: '70%',
  bgcolor: 'var(--black-secondary)',
};

export default function DealModal({ props }) {
  const { openModal, setOpenModal, dealStock } = props;
  const {
    symbol, price, variation, quantity,
  } = dealStock;

  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      open={openModal}
      sx={style}
    >
      <span>
        <ModalButton type="button" onClick={handleClose}>X</ModalButton>
        <UserMessage>Saldo disponível</UserMessage>
        <h1>{`R$ ${2000}`}</h1>
        <TableStyle>
          <thead>
            <tr>
              <th>AÇÃO</th>
              <th>COTAÇÃO</th>
              <th>VARIAÇÃO</th>
              <th>QTDE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ticker">{symbol}</td>
              <td>{price}</td>
              <td className={variation > 0 ? 'positive' : 'negative'}>{`${variation}%`}</td>
              <td>{quantity}</td>
            </tr>
          </tbody>
        </TableStyle>

        <ConfirmButton type="reset">CONFIRMAR</ConfirmButton>
      </span>
    </Modal>

  );
}

DealModal.propTypes = {
  openModal: PropTypes.bool,
}.isRequired;
