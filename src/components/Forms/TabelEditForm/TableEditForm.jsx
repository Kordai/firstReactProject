import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Field, reduxForm } from 'redux-form';
import s from './TableEditForm.module.css';

const TableEditForm = (props) => {

    const name = props.formName;

    const closeForm = () => {
        props.toggleBeForm(false)
    }

    let inputComponent = props.inputVal.map(
        (val) => {
            return (
                <Field
                    component="input"
                    placeholder={val}
                    name={val}
                    key={props.inputVal.indexOf(val)} />
            )
        }
    );

    return <>    
        <form className={props.activeForm? s.formPopup : null}>
            <h1>Add {name}</h1>
            {inputComponent}
            <button className={s.btn}>Send</button>
            <button onClick={closeForm} className={s.cancel}>Close</button>
        </form>
    </>

}

// export default reduxForm({
//     form: "Table"
// })(TableEditForm);

const mapStateToProps = (state, ownProps) => ({
    form: ownProps.formName,
});

export default compose(
    connect(mapStateToProps),
    reduxForm(),
)(TableEditForm);
