import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableStyle from '../../styles/elements/TableStyle';
import DealModal from '../modals/DealModal';
import TableBody from './TableBody';

export default function AssetsTable({ stocks }) {
  const [openModal, setOpenModal] = useState(false);
  const [dealStock, setDealStock] = useState({});

  const tableProps = {
    negociate: () => setOpenModal(true),
    setDealStock,
  };

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
        {stocks.map((stock) => <TableBody key={stock.symbol} props={tableProps} stock={stock} />)}
      </tbody>
      <DealModal props={modalProps} />
    </TableStyle>
  );
}

AssetsTable.propTypes = {
  stocks: PropTypes.array,
}.isRequired;
