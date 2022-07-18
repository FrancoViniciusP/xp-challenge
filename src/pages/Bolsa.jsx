import React from 'react';
import Footer from '../components/Footer';
import Table from '../components/Table';
import BodyHeader from '../styles/elements/BodyHeader';

export default function Bolsa() {
  return (
    <span>
      <BodyHeader>
        <button className="bolsaButton" type="button">Ativos</button>
        <button className="bolsaButton" type="button">Meus Ativos</button>
      </BodyHeader>
      <Table />
      <Footer />
    </span>
  );
}
