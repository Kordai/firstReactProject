import React from 'react';
import s from './LoginForm.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Component/Validators/Validators';
import { NewInput } from '../../Component/FormsControls/FormsControls';
import { getAuthState } from '../../../Redux/authSelectors';

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {   

    return <>
        <form onSubmit={props.handleSubmit} className={s.visible}>
            <div>
                <Field component="label" name="formName">Login</Field>
            </div>
            <br />
            <Field
                component={NewInput}
                validate={[required, maxLength20]}
                placeholder="Login or e-mail"
                name="login"
                 />
            <Field
                component={NewInput}
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
    state: getAuthState(state),
    enableReinitialize: true
});

export default compose(
    connect(mapStateToProps, {}),
    reduxForm(),
)(LoginForm);
