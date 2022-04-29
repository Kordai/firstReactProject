import React from 'react';
import './TableCell.css';


const TableCell = (props) => {
  
  let tableCell = props.state.map(
    val => <td key={props.state.indexOf(val)+10}> {val} </td>
  );

  return (
    <tr>
      {tableCell}
    </tr>
  )
}

export default TableCell;