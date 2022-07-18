import React from 'react';

export default function TableBody() {
  return (
    <tbody>
      <tr>
        <td className="ticker">PETR4</td>
        <td>20,00</td>
        <td className="negative">-1,27%</td>
        <td>10000</td>
        <td className="negociate">
          <button type="button">
            <img src="venda.svg" alt="" />
          </button>
        </td>
      </tr>
      <tr>
        <td className="ticker">ITUB4</td>
        <td>20,00</td>
        <td className="positive">2,03%</td>
        <td>0</td>
        <td className="negociate">
          <button type="button">
            <img src="noVenda.svg" alt="" />
          </button>
        </td>
      </tr>
    </tbody>
  );
}
