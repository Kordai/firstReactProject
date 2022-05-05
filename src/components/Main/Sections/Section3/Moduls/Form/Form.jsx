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
        <div>
          <input value={props.state.inputMark[val]} type="text" placeholder={val} name={val} onChange={inputUpdateVal} key={inputVal[val]} />
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

  return (
    <div>
      <div className={s.controlPanel}>
        <button onClick={openForm} className={s.openButton}>Add {props.state.formName}</button>

        <div className={s.paginationPanel}>
          <span className={s.page}>&lt;PAGE</span>
          <span className={s.spanPagination}>1</span>
          <span className={s.spanPagination}>2</span>
          <span className={s.spanPagination}>3</span>
          <span className={s.spanPagination}>4</span>
          <span className={s.spanPagination}>5</span>
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