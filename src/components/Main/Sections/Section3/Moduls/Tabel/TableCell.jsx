import React from 'react';
import './TableCell.css';


const TableCell = (props) => {
  let tableCell = props.state.map(
    val => <td onDoubleClick={() => openEditForm(props.state)} className="tdCell" key={props.cellKey + props.state.indexOf(val)}> {val} </td>
  );

  //убрать в редьюсер
  const openEditForm = (obj) => {
    let initialValues = {
      Point: obj[1],
      Customer: obj[2],
      Payment: obj[3],
      Date: obj[4]
    }
    console.log(initialValues)
    props.setinitialValues(initialValues)
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