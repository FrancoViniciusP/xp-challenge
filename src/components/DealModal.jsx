import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import ModalButton from '../styles/elements/ModalButton';
import UserMessage from '../styles/elements/UserMessage';
import TableStyle from '../styles/elements/TableStyle';
import DealDiv from '../styles/elements/DealDiv';
import GeneralButton from '../styles/elements/GeneralButton';
import { style } from '../helpers/constants';

export default function DealModal({ props }) {
  const { openModal, setOpenModal, dealStock } = props;
  const {
    symbol, price, variation, quantity,
  } = dealStock;
  const total = 3000;
  const [inputValue, setInputValue] = useState(0);
  const [inputQuantity, setInputQuantity] = useState(0);
  const [isBuying, setIsBuying] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (openModal) {
      setInputValue(0);
      setInputQuantity(0);
    }
  }, [openModal]);

  useEffect(() => {
    if (!isBuying) {
      setIsDisabled(inputQuantity > quantity || inputQuantity < 100);
    } else {
      setIsDisabled(inputValue > total || inputQuantity < 100);
    }
  }, [inputValue, inputQuantity, isBuying, quantity]);

  const handleClose = () => setOpenModal(false);

  function roundNumber(number) {
    return Math.floor(number / 100) * 100;
  }

  function turnPositive(number) {
    return Math.abs(number);
  }

  function handleValue({ value }) {
    setInputValue(turnPositive(value));
    const quanti = value / price;
    setInputQuantity(roundNumber(quanti));
  }

  function afterFocus() {
    const newAmount = roundNumber(inputQuantity);
    setInputQuantity(newAmount);
    setInputValue((newAmount * price).toFixed(0));
  }

  function handleQuantity({ value }) {
    setInputQuantity(Math.abs(value));
    const amount = value * price;
    setInputValue(amount.toFixed(0));
  }

  return (
    <Modal
      open={openModal}
      sx={style}
    >
      <span>
        <ModalButton type="button" onClick={handleClose}>X</ModalButton>
        <div className="infosSpace">
          <UserMessage>Saldo disponível</UserMessage>
          <h1>{`R$ ${total}`}</h1>
        </div>
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
        <button
          onClick={() => setIsBuying(true)}
          className="deal comprar"
          type="button"
        >
          Comprar
        </button>
        <button
          onClick={() => setIsBuying(false)}
          disabled={quantity === 0}
          className="deal vender"
          type="button"
        >
          Vender
        </button>
        <DealDiv>
          Quantidade
          <input
            type="number"
            className={isBuying ? 'buy' : 'sell'}
            onBlur={() => afterFocus()}
            placeholder="Quantidade"
            value={inputQuantity}
            onChange={({ target }) => handleQuantity(target)}
          />
        </DealDiv>
        <DealDiv>
          Valor Financeiro
          <input
            type="number"
            className={isBuying ? 'buy' : 'sell'}
            placeholder="Valor"
            onBlur={() => afterFocus()}
            value={inputValue}
            onChange={({ target }) => handleValue(target)}
          />
        </DealDiv>
        <GeneralButton disabled={isDisabled} type="reset">CONFIRMAR</GeneralButton>
      </span>
    </Modal>

  );
}

DealModal.propTypes = {
  openModal: PropTypes.bool,
}.isRequired;
