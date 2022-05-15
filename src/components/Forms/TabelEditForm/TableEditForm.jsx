import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import s from './TableEditForm.module.css';

const TableEditForm = (props) => {

    const name = props.formName;

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
        <form className={s.formPopup}>
            <h1>Add {name}</h1>
            {inputComponent}
            <button onClick={props.sendForm} className={s.btn}>Send</button>
            <button onClick={props.closeForm} className={s.cancel}>Close</button>
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
