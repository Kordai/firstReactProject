import React from 'react';
import s from './UserForm.module.css';
import { toggleBeForm } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { NewInput } from '../../Component/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Component/Validators/Validators';
import { getUsersState } from '../../../Redux/usersSelectors';

const maxLength20 = maxLengthCreator(20);

const UserForm = ({handleSubmit, state, formName, toggleBeForm}) => {

    const getField = (component, validate, placeholder, name) => {
        return <Field
        component={component}
        validate={validate}
        placeholder={placeholder}
        name={name} />
    }

    return <>
        <form onSubmit={handleSubmit} className={state.activeForm ? s.visible : s.invisible}>
            <div>
                <Field component="label" name="formName">{formName} User</Field>
            </div>
            <br />
            {getField(NewInput, [required, maxLength20], "First name", "firstName")}
            {getField(NewInput, [required, maxLength20], "Last name", "lastName")}
            {getField(NewInput, [required, maxLength20], "Address", "address")}
            {getField(NewInput, [required, maxLength20], "City", "city")}
            {getField(NewInput, [required, maxLength20], "Phone namber", "phone")}
            {getField(NewInput, [required, maxLength20], "E-mail", "email")}            
            <Field
                component="select"
                name="team">
                <option >Select a team</option>
                <option value="Service">Service</option>
                <option value="Meneger">Meneger</option>
                <option value="Admin">Admin</option>
            </Field>
            {getField(NewInput, [required, maxLength20], "Login", "login")} 
            {getField(NewInput, [required, maxLength20], "Password", "password")} 
            <button>Submit</button>
            <button onClick={() => toggleBeForm(false)} type='button'>Close</button>
        </form>
    </>
}
//
const mapStateToProps = (state) => ({
    form: "UserForm",
    state: getUsersState(state),
    enableReinitialize: true
});

export default compose(
    connect(mapStateToProps, { toggleBeForm }),
    reduxForm(),
)(UserForm);
