import React, { useState } from 'react';
import Footer from '../components/Footer';
import Table from '../components/Table';
import market from '../market';
import BodyHeader from '../styles/elements/BodyHeader';

export default function Bolsa() {
  const [stocks, setStocks] = useState(market);

  function filterMyStocks() {
    const filtered = market.filter((item) => item.quantity > 0);
    setStocks(filtered);
  }

  return (
    <span>
      <BodyHeader>
        <button className="bolsaButton" type="button" onClick={() => setStocks(market)}>
          Ativos
        </button>
        <button className="bolsaButton" type="button" onClick={filterMyStocks}>Meus Ativos</button>
      </BodyHeader>
      <Table stocks={stocks} />
      <Footer />
    </span>
  );
}
