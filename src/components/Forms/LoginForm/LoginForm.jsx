import React from 'react';
import s from './LoginForm.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Component/Validators/Validators';

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {   

    return <>
        <form onSubmit={props.handleSubmit} className={s.visible}>
            <div>
                <Field component="label" name="formName">Login</Field>
            </div>
            <br />
            <Field
                component="input"
                placeholder="Login or e-mail"
                name="login"
                validate={[required, maxLength20]} />
            <Field
                component="input"
                placeholder="Password"
                name="password"
                type="password"
                validate={[required, maxLength20]} />
            <div><span className={s.errorAuth}> {props.errorAuth} </span> </div>
            <button>Login</button>
        </form>
    </>
}
//
const mapStateToProps = (state) => ({
    form: "LoginForm",
    state: state.auth,
    enableReinitialize: true
});

export default compose(
    connect(mapStateToProps, {}),
    reduxForm(),
)(LoginForm);
