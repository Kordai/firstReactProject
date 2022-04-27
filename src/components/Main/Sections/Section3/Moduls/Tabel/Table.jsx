import React from 'react';
import TableRow from './TableRow'
import s from './Table.module.css';

const Table = (props) => {
      return (
            <div className={s.t}>
                  <TableRow state={props.state} />
            </div>
      )
}

export default Table;