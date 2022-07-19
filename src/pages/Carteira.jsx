import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import CashInfos from '../components/CashInfos';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InvestInfos from '../components/InvestInfos';
import TransferModal from '../components/TransferModal';

export default function Carteira() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  function investButton() {
    navigate('/bolsa');
  }

  const modalProps = {
    openModal,
    setOpenModal,
  };

  const pageProps = {
    leftButtonName: 'TRANSFERIR',
    rightButtonName: 'INVESTIR',
    rightClick: investButton,
    leftClick: () => setOpenModal(true),
    leftType: 'secondary',
    rightType: 'primary',
  };

  return (
    <span>
      <Header />
      <InvestInfos />
      <CashInfos props={pageProps} />
      <TransferModal props={modalProps} />
      <Footer />
    </span>
  );
}
