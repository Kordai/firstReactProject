import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import s from './TableEditForm.module.css';

const TableEditForm = (props) => {

    const name = props.formName;

    let inputComponent = props.inputVal.map(
        (val) => {
            return (
                <Field
                    component="input"
                    placeholder={val}
                    name={val}
                    key={props.inputVal.indexOf(val)}
                />
            )
        }
    );

    return <>
        <form onSubmit={props.handleSubmit} className={props.activeForm ? s.formPopup : null}>
            <h1>{props.nameAction} {name}</h1>
            <label className={props.nameAction === "Add" ? s.noneLabel : s.activeLabel} >ID: {props.initialValues.Id}</label>
            {inputComponent}
            <button className={s.btn}>{props.nameAction === "Add" ? "Submit" : "Update"}</button>
            <button onClick={() => props.onDeletePayment(props.initialValues.Id)} className={props.nameAction === "Add" ? s.noneLabel : s.deleteButton} type="button">Delete</button>
            <button onClick={props.closeForm} className={s.cancel} type="button">Close</button>
        </form>
    </>

}

const mapStateToProps = (state, ownProps) => ({
    form: ownProps.formName,
    enableReinitialize: true
});

export default compose(
    connect(mapStateToProps),
    reduxForm(),
)(TableEditForm);
