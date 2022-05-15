import React from 'react';
import { reduxForm } from 'redux-form';
import s from './TableEditForm.module.css';

const TableEditForm = (props) => {

    const name = props.formName;

    return <>
        <div ref={props.form} className={s.formPopup}>
            <h1>Add {name}</h1>
            {props.inputComponent}
            <button onClick={props.sendForm} className={s.btn}>Send</button>
            <button onClick={props.closeForm} className={s.cancel}>Close</button>
        </div>
    </>

}

export default reduxForm({
    form: name
})(TableEditForm)