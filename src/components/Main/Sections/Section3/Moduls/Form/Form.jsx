import React from 'react';
import s from './Form.module.css';

const Form = (props) => {

  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0] });
  let form = React.createRef();

  const inputUpdateVal = (name1) => {
    props.addUpdate(name1.target.name, name1.target.value);
  }

  let inputComponent = inputVal.map(
    (val) => {
      return (
        <div key={inputVal.indexOf(val)}>
          <input 
          value={props.state.inputMark[val]} 
          type="text" 
          placeholder={val} 
          name={val} 
          onChange={inputUpdateVal} 
          key={inputVal.indexOf(val)} />
        </div>
      )
    }
  );

  const openForm = () => {
    form.current.style.display = "block";
  }

  const sendForm = () => {
    props.addUpdateText();
    form.current.style.display = "none";
  }

  const closeForm = () => {
    form.current.style.display = "none";
  }

  let pageCount = Math.ceil(props.state.totalPaymentsCount / props.state.pageSize);

let pages = [];
for (let i=1; i<= pageCount; i++) {
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
            onClick={() => {props.setCurrentPage(p); props.onPageChenged(p)}} 
            className={props.state.currentPage === p ? s.active:null}
            key = {p}>{p}</span>
          })}

          <span className={s.page}>PAGE&gt;</span>
        </div>

        <button className={s.deleteButton}>Delete {props.state.formName}</button>
      </div>

      <div ref={form} className={s.formPopup}>
        <h1>Add {props.state.formName}</h1>
        {inputComponent}
        <button onClick={sendForm} className={s.btn}>Send</button>
        <button onClick={closeForm} className={s.btnCancel}>Close</button>
      </div>
    </div>
  );
}

export default Form;