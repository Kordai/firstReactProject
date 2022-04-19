import React from 'react';
import './TableRow.css';
import TableCell from './TableCell'

const TableRow = (props) => {

  let thTable = props.state.headTable.map(
    val => <th>{val}</th>
  );

  let tableCell = props.state.data.map(
    val => <TableCell state={val} />
  );

  return (
    <table className="table">
      <tr>
        {thTable}
      </tr>
      {tableCell}

    </table>
  )
}

export default TableRow;