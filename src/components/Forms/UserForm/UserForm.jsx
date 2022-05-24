import React from 'react';
import s from './UserForm.module.css';
import { toggleBeForm } from '../../../Redux/usersReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

const UserForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit} className={props.state.activeForm ? s.visible : s.invisible}>
            <Field
                component="input"
                placeholder="FORM NEW USER"
                name="NewUser" />
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
