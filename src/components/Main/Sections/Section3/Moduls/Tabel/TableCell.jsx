import React from 'react';
import './TableCell.css';


const TableCell = (props) => {
  let tableCell = props.state.map(
    val => <td className="tdCell" key={props.cellKey + props.state.indexOf(val)}> {val} </td>
  );

  return (
    <tr >
      {tableCell}
    </tr>
  )
}

export default TableCell;