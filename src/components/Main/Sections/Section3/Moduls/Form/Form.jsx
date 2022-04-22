import React from 'react';
import s from './Form.module.css';

const Form = (props) => {

  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0] });
  let inputRef = [];
  let form = React.createRef();

  const inputUpdateVal = (name1) => {
    let idForm = inputRef.length;
    console.log(name1.target.name, name1.target.value, idForm);
  }

  let inputComponent = inputVal.map(
    (val) => {
      let newRef = React.createRef();
      inputRef.push(newRef);
      return (
        <div>
          <input ref={newRef} type="text" placeholder={val} name={val} onChange={inputUpdateVal} />
        </div>
      )
    }
  );

  

  const openForm = () => {
    form.current.style.display = "block";
  }

  const sendForm = () => {
    let inputValue = inputRef.map(
      val => val.current.value
    )
  }

  const closeForm = () => {
    form.current.style.display = "none";
  }

  return (
    <div>
      <button onClick={openForm} className={s.openButton}>Add Payment</button>
      <div ref={form} className={s.formPopup}>
        <h1>Send payment</h1>
        {inputComponent}
        <button onClick={sendForm} className={s.btn}>Send</button>
        <button onClick={closeForm} className={s.btnCancel}>Close</button>
      </div>
    </div>
  );
}

export default Form;