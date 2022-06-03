import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { NewInput } from '../../Component/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Component/Validators/Validators';
import s from './DeliveryEditForm.module.css';

const maxLength20 = maxLengthCreator(20);

const DeliveryEditForm = (props) => {

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
            <h1>{props.nameAction} delivery</h1>
            <label className={props.nameAction === "New" ? s.noneLabel : s.activeLabel} name={"Id"} >ID: {props.initialValues.id}</label>
            {inputComponent}
            <button className={s.btn}>{props.nameAction === "New" ? "Submit" : "Update"}</button>
            <button onClick={props.closeForm} className={s.cancel} type="button">Close</button>
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
