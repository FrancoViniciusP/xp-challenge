import React, { useState } from 'react';
import market from '../market';
import TableStyle from '../styles/elements/TableStyle';
import DealModal from './DealModal';
import TableBody from './TableBody';

export default function Table() {
  const [openModal, setOpenModal] = useState(false);
  const [dealStock, setDealStock] = useState({});

  const tableProps = {
    negociate: () => setOpenModal(true),
    setDealStock,
  };

  // console.log(dealStock, openModal);
  const modalProps = {
    openModal,
    setOpenModal,
    isNegociation: true,
    dealStock,
  };

  return (
    <TableStyle>
      <thead>
        <tr>
          <th>AÇÃO</th>
          <th>COTAÇÃO</th>
          <th>VARIAÇÃO</th>
          <th>QTDE</th>
          <th>NEGOCIAR</th>
        </tr>
      </thead>
      <tbody>
        {market.map((stock) => <TableBody key={stock.symbol} props={tableProps} stock={stock} />)}
      </tbody>
      <DealModal props={modalProps} />
    </TableStyle>
  );
}
