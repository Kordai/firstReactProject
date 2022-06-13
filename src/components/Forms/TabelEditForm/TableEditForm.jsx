import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { NewInput } from '../../Component/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Component/Validators/Validators';
import s from './TableEditForm.module.css';

const maxLength20 = maxLengthCreator(20);

const TableEditForm = ({formName, inputVal, handleSubmit, activeForm, nameAction, initialValues, onDeletePayment, closeForm}) => {

    let inputComponent = inputVal.map(
        (val) => {
            return (
                <Field
                    component={NewInput}
                    validate={[required, maxLength20]}
                    placeholder={val}
                    name={val}
                    key={inputVal.indexOf(val)}
                />
            )
        }
    );

    return <>
        <form onSubmit={handleSubmit} className={activeForm ? s.formPopup : s.formPopupNone}>
            <h1>{nameAction} {formName}</h1>
            <label className={nameAction === "Add" ? s.noneLabel : s.activeLabel} name={"Id"} >ID: {initialValues.Id}</label>
            {inputComponent}
            <button className={s.btn}>{nameAction === "Add" ? "Submit" : "Update"}</button>
            <button onClick={() => onDeletePayment(initialValues.Id)} className={nameAction === "Add" ? s.noneLabel : s.deleteButton} type="button">Delete</button>
            <button onClick={closeForm} className={s.cancel} type="button">Close</button>
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
