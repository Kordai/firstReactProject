import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { NewInput } from '../../Component/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Component/Validators/Validators';
import s from './DeliveryEditForm.module.css';

const maxLength20 = maxLengthCreator(20);

const DeliveryEditForm = ({inputVal, handleSubmit, activeForm, nameAction, initialValues, closeForm}) => {

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
            <h1>{nameAction} delivery</h1>
            <label className={nameAction === "New" ? s.noneLabel : s.activeLabel} name={"Id"} >ID: {initialValues.id}</label>
            {inputComponent}
            <button className={s.btn}>{nameAction === "New" ? "Submit" : "Update"}</button>
            <button onClick={closeForm} className={s.cancel} type="button">Close</button>
        </form>
    </>

}

const mapStateToProps = (state, ownProps) => ({
    form: "Delivery",
    enableReinitialize: true
});

export default compose(
    connect(mapStateToProps),
    reduxForm(),
)(DeliveryEditForm);
