import React from 'react';
import './TableCell.css';

const TableCell = ({state, openEditForm, cellKey}) => {
  let tableCell = state.map(
    val => <td onDoubleClick={() => openEditForm(state)} className="tdCell" key={cellKey + state.indexOf(val)}> {val} </td>
  );

  return (
    <tr >
      {tableCell}
    </tr>
  )
}

export default TableCell;