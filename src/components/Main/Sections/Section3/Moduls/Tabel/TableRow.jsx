import React from 'react';
import './TableRow.css';
import TableCell from './TableCell'

const TableRow = ({state, openEditForm}) => {

  let thTable = state.headTable.map(
    val => <th key={state.headTable.indexOf(val)}>{val}</th>
  );

  let tableCell = state.data.map(
    val => <TableCell
      state={val}
      key={val[0]}
      cellKey={val[0]}       
      openEditForm={openEditForm}/>
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