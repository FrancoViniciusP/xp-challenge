import React from 'react';

export default function Table() {
  return (
    <table>
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
        <tr>
          <td>PETR4</td>
          <td>20,00</td>
          <td>-1,27%</td>
          <td>1000</td>
          <td>C V</td>
        </tr>
      </tbody>
    </table>
  );
}
