import React from 'react';
import TableEditForm from '../../../../../Forms/TabelEditForm/TableEditForm';
import s from './TableActionForm.module.css';

const TableActionForm = (props) => {

  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0] });
  let form = React.createRef();

  const openForm = () => {
    form.current.style.display = "block";
  }

  const sendForm = () => {
    props.addUpdateText();
    form.current.style.display = "none";
  }

  const setCookieAlex = () => {

  }

  const closeForm = () => {
    form.current.style.display = "none";
  }

  let pageCount = Math.ceil(props.state.totalPaymentsCount / props.state.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }


  return (
    <div>
      <div className={s.controlPanel}>
        <button onClick={openForm} className={s.openButton}>Add {props.state.formName}</button>

        <div className={s.paginationPanel}>
          <span className={s.page}>&lt;PAGE</span>

          {pages.map(p => {
            return <span
              onClick={() => { props.setCurrentPage(p); props.onPageChenged(p) }}
              className={props.state.currentPage === p ? s.active : null}
              key={p}>{p}</span>
          })}

          <span className={s.page}>PAGE&gt;</span>
        </div>

        <button onClick={setCookieAlex} className={s.deleteButton}>Delete {props.state.formName}</button>
      </div>

      <TableEditForm
        formName={props.state.formName}
        inputVal={inputVal}
        sendForm={sendForm}
        closeForm={closeForm} />
        
    </div>
  );
}

export default TableActionForm;