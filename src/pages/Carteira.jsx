import React from 'react';
import { useNavigate } from 'react-router';
import CashInfos from '../components/CashInfos';
import Header from '../components/Header';
import InvestInfos from '../components/InvestInfos';

export default function Carteira() {
  const navigate = useNavigate();

  function investButton() {
    navigate('/bolsa');
  }

  const pageProps = {
    leftButtonName: 'TRANSFERIR',
    rightButtonName: 'INVESTIR',
    rightClick: investButton,
    leftType: 'secondary',
    rightType: 'primary',
  };
  return (
    <body>
      <Header />
      <InvestInfos />
      <CashInfos props={pageProps} />
    </body>
  );
}
