import React from 'react';
import './TableCell.css';


const TableCell = (props) => {
  let tableCell = props.state.map(
    val => <td onDoubleClick={() => openEditForm(props.state)}   className="tdCell" key={props.cellKey + props.state.indexOf(val)}> {val} </td>
  );

  const openEditForm = (obj) => {
    props.toggleBeNameForm("Edit")
    props.toggleBeForm(true)
    console.log(props.form)
    props.form.Payment.values.Point = obj[1]
    props.form.Payment.values.Customer = obj[2]
    props.form.Payment.values.Payment = obj[3]
    props.form.Payment.values.Date = obj[4]   
  }

  return (
    <tr >
      {tableCell}
    </tr>
  )
}

export default TableCell;