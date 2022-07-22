import React from 'react';
import PropTypes from 'prop-types';
import TableStyle from '../../styles/elements/TableStyle';

export default function OneAssetTable({ stock, quantity }) {
  const {
    symbol, price, variation,
  } = stock;
  return (
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
          <td data-testid="asset-quantity">{quantity}</td>
        </tr>
      </tbody>
    </TableStyle>
  );
}

OneAssetTable.propTypes = {
  stock: {
    symbol: PropTypes.string,
    price: PropTypes.number,
    variation: PropTypes.number,
  },
  quantity: PropTypes.number,
}.isRequired;
