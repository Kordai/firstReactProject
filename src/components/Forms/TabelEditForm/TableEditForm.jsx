import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Field, reduxForm } from 'redux-form';
import s from './TableEditForm.module.css';

const TableEditForm = (props) => {

    const {
        favoriteColorValue,
        fullName,
        handleSubmit,
        hasEmailValue,
        pristine,
        reset,
        submitting
      } = props

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
                    
                    key={props.inputVal.indexOf(val)}
                     />
            )
        }
    );

    return <>    
        <form onSubmit={props.handleSubmit} className={props.activeForm? s.formPopup : null}>
            <h1>{props.nameAction} {name}</h1>
            <label className={props.nameAction==="Add"? s.noneLabel:s.activeLabel} >ID: 101</label>
            {inputComponent}
            <button className={s.btn}>{props.nameAction==="Add"? "Submit":"Update"}</button>
            <button className={props.nameAction==="Add"? s.noneLabel:s.deleteButton} type="button">Delete</button>
            <button onClick={reset} className={s.cancel} type="button">Close</button>
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
