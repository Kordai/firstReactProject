import React from 'react';
import './TableRow.css';
import TableCell from './TableCell'

const TableRow = (props) => {

  let thTable = props.state.headTable.map(
    val => <th key={props.state.headTable.indexOf(val)}>{val}</th>
  );

  let tableCell = props.state.data.map(
    val => <TableCell
      form={props.form}
      state={val}
      key={val[0]}
      cellKey={val[0]}
      toggleBeForm={props.toggleBeForm}
      toggleBeNameForm={props.toggleBeNameForm} />
  );

  return (
    <table className="table">
      <tbody>
        <tr className='thTable'>
          {thTable}
        </tr>
        {tableCell}
      </tbody>
    </table>
  )
}

export default TableRow;