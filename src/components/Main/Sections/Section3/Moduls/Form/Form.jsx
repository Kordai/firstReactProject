import React from 'react';
import s from './Form.module.css';

const Form = (props) => {

  let pointName = React.createRef();
  let customerName = React.createRef();
  let payment = React.createRef();
  let month = React.createRef();
  let form = React.createRef();

  const openForm = () => {
    form.current.style.display = "block";
  }

  const sendForm = () => {
    //nnnn
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
          <input ref={pointName} type="text" placeholder="point" name="point" required />

          <input ref={customerName} type="text" placeholder="customer" name="customer" required />

          <input ref={payment} type="text" placeholder="payment" name="payment" required />

          <input ref={month} type="text" placeholder="month" name="month" required />

          <button onClick={sendForm} className={s.btn}>Send</button>
          <button onClick={closeForm} className={s.btnCancel}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default Form;