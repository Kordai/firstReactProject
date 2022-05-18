import React from 'react';
import './TableCell.css';


const TableCell = (props) => {
  let tableCell = props.state.map(
    val => <td onDoubleClick={() => openEditForm(props.state)}   className="tdCell" key={props.cellKey + props.state.indexOf(val)}> {val} </td>
  );

  const openEditForm = (obj) => {
    props.toggleBeNameForm("Edit")
    props.toggleBeForm(true)
    
  }

  return (
    <tr >
      {tableCell}
    </tr>
  )
}

export default TableCell;