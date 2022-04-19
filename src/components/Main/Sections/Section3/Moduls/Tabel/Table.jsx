import React from 'react';
import TableRow from './TableRow'

const Table = (props) => { 
    return (       
          <TableRow state={props.state}/>
    )
  }

  export default Table;