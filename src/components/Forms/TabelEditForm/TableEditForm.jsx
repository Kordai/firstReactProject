import React from 'react';
import s from './TableEditForm.module.css';

const TableEditForm = (props) => {

    return <>
        <div ref={props.form} className={s.formPopup}>
            <h1>Add {props.formName}</h1>
            {props.inputComponent}
            <button onClick={props.sendForm} className={s.btn}>Send</button>
            <button onClick={props.closeForm} className={s.cancel}>Close</button>
        </div>
    </>

}

export default TableEditForm;