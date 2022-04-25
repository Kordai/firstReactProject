import React from 'react';
import s from './Form.module.css';

const Form = (props) => {

  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0] });
  let form = React.createRef();

  const inputUpdateVal = (name1) => {
    props.addUAction(name1.target.name, name1.target.value);
  }

  let inputComponent = inputVal.map(
    (val) => {
      return (
        <div>
          <input value={props.state.inputMark[val]} type="text" placeholder={val} name={val} onChange={inputUpdateVal} />
        </div>
      )
    }
  );

  const openForm = () => {
    form.current.style.display = "block";
  }

  const sendForm = () => {
    props.addUDAction();
    form.current.style.display = "none";
  }

  const closeForm = () => {
    form.current.style.display = "none";
  }

  return (
    <div>
      <button onClick={openForm} className={s.openButton}>Add {props.state.formName}</button>
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