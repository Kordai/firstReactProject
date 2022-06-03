import React from 'react';
import s from './LoginForm.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit} className={s.visible}>
            <div>
                <Field component="label" name="formName">Login</Field>
            </div>
            <br />
            <Field component="input" placeholder="Login or e-mail" name="login" />
            <Field component="input" placeholder="Password" name="password" type="password" />            
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
    connect(mapStateToProps, {  }),
    reduxForm(),
)(LoginForm);
