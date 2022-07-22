import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import ModalButton from '../../styles/elements/ModalButton';
import UserMessage from '../../styles/elements/UserMessage';
import DealDiv from '../../styles/elements/DealDiv';
import GeneralButton from '../../styles/elements/GeneralButton';
import { style } from '../../helpers/constants';
import store from '../../redux/store';
import { deposit, withdraw } from '../../redux/reducers/clientInfos';
import { buyAssets, sellAssets } from '../../redux/reducers/assetsInfos';
import OneAssetTable from '../tables/OneAssetTable';

export default function DealModal({ props }) {
  const market = useSelector((state) => state.assetsInfos.assets);
  const freeAmount = useSelector((state) => state.clientInfos.freeAmount);

  const { openModal, setOpenModal, dealStock } = props;
  const { symbol, price } = dealStock;
  const { quantity } = market.find((asset) => asset.symbol === symbol) || 0;

  const [inputValue, setInputValue] = useState(0);
  const [inputQuantity, setInputQuantity] = useState(0);
  const [isBuying, setIsBuying] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClose = () => setOpenModal(false);

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
      setIsDisabled(+inputValue > +freeAmount);
    }
  }, [inputValue, inputQuantity, isBuying, quantity, freeAmount]);

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

  function handleQuantity({ value }) {
    setInputQuantity(turnPositive(value));
    const amount = value * price;
    setInputValue(amount.toFixed(0));
  }

  function afterFocus() {
    const newAmount = roundNumber(inputQuantity);
    setInputQuantity(newAmount);
    setInputValue((newAmount * price).toFixed(0));
  }

  function handleClick() {
    afterFocus();
    if (isBuying) {
      store.dispatch(withdraw(inputValue));
      store.dispatch(buyAssets({ symbol, inputQuantity }));
    } else {
      store.dispatch(deposit(inputValue));
      store.dispatch(sellAssets({ symbol, inputQuantity }));
    }
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
          <h1>{`R$ ${freeAmount}`}</h1>
        </div>
        <OneAssetTable stock={dealStock} quantity={quantity} />

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
        <GeneralButton onClick={() => handleClick()} disabled={isDisabled} type="reset">CONFIRMAR</GeneralButton>
      </span>
    </Modal>

  );
}

DealModal.propTypes = {
  openModal: PropTypes.bool,
}.isRequired;
