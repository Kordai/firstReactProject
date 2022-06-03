import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { NewInput } from '../../Component/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Component/Validators/Validators';
import s from './TableEditForm.module.css';

const maxLength20 = maxLengthCreator(20);

const TableEditForm = (props) => {

    const name = props.formName;

    let inputComponent = props.inputVal.map(
        (val) => {
            return (
                <Field
                    component={NewInput}
                    validate={[required, maxLength20]}
                    placeholder={val}
                    name={val}
                    key={props.inputVal.indexOf(val)}
                />
            )
        }
    );

    return <>
        <form onSubmit={props.handleSubmit} className={props.activeForm ? s.formPopup : s.formPopupNone}>
            <h1>{props.nameAction} {name}</h1>
            <label className={props.nameAction === "Add" ? s.noneLabel : s.activeLabel} name={"Id"} >ID: {props.initialValues.Id}</label>
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
