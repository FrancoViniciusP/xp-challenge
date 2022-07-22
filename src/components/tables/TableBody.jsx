import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ props, stock }) {
  const {
    symbol, price, variation, quantity,
  } = stock;

  function handleClick() {
    props.negociate();
    props.setDealStock(stock);
  }

  return (

    <tr>
      <td className="ticker">{symbol}</td>
      <td>{price}</td>
      <td className={variation > 0 ? 'positive' : 'negative'}>{`${variation}%`}</td>
      <td>{quantity}</td>
      <td className="negociate">
        <button data-testid="negotiate-btn" type="button" onClick={handleClick}>
          <img src={quantity > 0 ? 'venda.svg' : 'noVenda.svg'} alt="botão para negociar" />
        </button>
      </td>

    </tr>

  );
}

TableBody.propTypes = {
  negociate: PropTypes.func,
}.isRequired;
