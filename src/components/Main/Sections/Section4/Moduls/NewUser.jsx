import React from 'react';
import UserForm from '../../../../Forms/UserForm/UserForm';
import s from './NewUser.module.css';

const NewUser = (props) =>{

    const newUser = () => {
        props.toggleBeForm(true)
    }
    const onSubmitForm = (formData) => {
        props.newUser(formData)
    }

    return <div className={s.noActive}>
    <div onClick={newUser} className={s.newUser}>
        <span className={s.plus}>+</span>
    </div>
    <UserForm onSubmit={onSubmitForm}/>
    </div>

}

export default NewUser