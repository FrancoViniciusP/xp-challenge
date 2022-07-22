import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AssetsTable from '../components/tables/AssetsTable';
import Footer from '../components/navigation/Footer';
import BodyHeader from '../styles/elements/BodyHeader';

export default function Bolsa() {
  const market = useSelector((state) => state.assetsInfos.assets);
  const [stocks, setStocks] = useState(market);

  useEffect(() => {
    setStocks(market);
  }, [market]);

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
      <AssetsTable stocks={stocks} />
      <Footer />
    </span>
  );
}
