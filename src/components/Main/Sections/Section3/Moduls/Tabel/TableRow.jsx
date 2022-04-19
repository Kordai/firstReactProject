import React from 'react';
import './TableRow.css';
import TableCell from './TableCell'

const TableRow = () => {
  return (
    <table className="table">
      <tr>
        <th>№ п/п</th>
        <th>Наименование товара</th>
        <th>Ед. изм.</th>
        <th>Количество</th>
        <th>Цена за ед. изм., руб.</th>
        <th>Стоимость, руб.</th>
      </tr>
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell />

    </table>
  )
}

export default TableRow;