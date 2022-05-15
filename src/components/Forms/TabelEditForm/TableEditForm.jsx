import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import s from './TableEditForm.module.css';

const TableEditForm = (props) => {

    const name = props.formName;

    return <>
        <form className={s.formPopup}>
            <h1>Add {name}</h1>
            {props.inputComponent}
            <button onClick={props.sendForm} className={s.btn}>Send</button>
            <button onClick={props.closeForm} className={s.cancel}>Close</button>
        </form>
    </>

}

const mapStateToProps = (state, ownProps) => ({
    form: ownProps.formName,
  });
  
  export default compose(
    connect(mapStateToProps),
    reduxForm(),
  )(TableEditForm);
  