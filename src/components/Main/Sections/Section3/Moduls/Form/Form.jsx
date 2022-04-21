import React from 'react';
import s from './Form.module.css';

const Form = (props) => {
 
  let inputVal = props.state.headTable.filter((f) => { return f !== props.state.headTable[0]});
  let inputRef = [];

  

  // let pointName = React.createRef();
  // let customerName = React.createRef();
  // let payment = React.createRef();
  // let month = React.createRef();
  let form = React.createRef();

  let inputComponent = inputVal.map(
    (val) => {
    let newRef = React.createRef(); 
    inputRef.push(newRef);
    return <input ref={newRef} type="text" placeholder={val} name={val} required />}
  );

  const openForm = () => {
    form.current.style.display = "block";
  }

  const sendForm = () => {
    console.log (inputRef.map(
      val => val.current.value
    ))
  }

  const closeForm = () => {
    form.current.style.display = "none";
  }

  return (
    <div>
      <button onClick={openForm} className={s.openButton}>Add Payment</button>
      <div ref={form} className={s.formPopup}>
        <form action="#" className={s.formContainer}>
          <h1>Send payment</h1>
          
          {inputComponent}

          <button onClick={sendForm} className={s.btn}>Send</button>
          <button onClick={closeForm} className={s.btnCancel}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default Form;