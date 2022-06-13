import React from 'react';
import TableRow from './TableRow'
import s from './Table.module.css';

const Table = ({state, openEditForm}) => {
      return (
            <div className={s.t}>
                  <TableRow
                        state={state}
                        openEditForm={openEditForm} />
            </div>
      )
}

export default Table;