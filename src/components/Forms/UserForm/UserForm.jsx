import React from 'react';
import s from './UserForm.module.css';
import { toggleBeForm } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

const UserForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit} className={props.state.activeForm ? s.visible : s.invisible}>
            <div>
                <Field component="label" name="formName">{props.formName} User</Field>
            </div>
            <br />
            <Field component="input" placeholder="First name" name="firstName" />
            <Field component="input" placeholder="Last name" name="lastName" />
            <Field component="input" placeholder="Address" name="address" />
            <Field component="input" placeholder="City" name="city" />
            <Field component="input" placeholder="Namber phone" name="phone" />
            <Field component="input" placeholder="E-mail" name="email" />
            <Field component="select" name="team">
                <option >Select a team</option>
                <option value="Service">Service</option>
                <option value="Meneger">Meneger</option>
                <option value="Admin">Admin</option>
            </Field>
            <Field component="input" placeholder="Login" name="login" />
            <Field component="input" placeholder="Password" name="password" />
            <button>Submit</button>
            <button onClick={() => props.toggleBeForm(false)} type='button'>Close</button>
        </form>
    </>
}
//
const mapStateToProps = (state) => ({
    form: "UserForm",
    state: state.users,
    enableReinitialize: true
});

export default compose(
    connect(mapStateToProps, { toggleBeForm }),
    reduxForm(),
)(UserForm);
