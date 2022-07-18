import React from 'react';
import TableStyle from '../styles/elements/TableStyle';
import TableBody from './TableBody';

export default function Table() {
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
      <TableBody />
    </TableStyle>
  );
}
