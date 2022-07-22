import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CashInfos from '../components/infos/CashInfos';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import InvestInfos from '../components/infos/InvestInfos';
import TransferModal from '../components/modals/TransferModal';

export default function Carteira() {
  const [openModal, setOpenModal] = useState(false);
  const [hideValues, setHideValues] = useState(false);

  const history = useHistory();

  function investButton() {
    history.push('/bolsa');
  }

  const modalProps = {
    openModal,
    setOpenModal,
    hideValues,
  };

  const pageProps = {
    leftButtonName: 'TRANSFERIR',
    rightButtonName: 'INVESTIR',
    rightClick: investButton,
    leftClick: () => setOpenModal(true),
    leftType: 'secondary',
    rightType: 'primary',
    hideValues,
  };

  return (
    <span>
      <Header setHide={setHideValues} />
      <InvestInfos props={pageProps} />
      <CashInfos props={pageProps} />
      <TransferModal props={modalProps} />
      <Footer />
    </span>
  );
}
