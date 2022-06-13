import React from 'react';
import UserForm from '../../../../Forms/UserForm/UserForm';
import s from './NewUser.module.css';

const NewUser = ({toggleBeForm, newUser}) =>{

    const newUserForm = () => {
        toggleBeForm(true)
    }
    const onSubmitForm = (formData) => {
        newUser(formData)
    }

    return <div className={s.noActive}>
    <div onClick={newUserForm} className={s.newUser}>
        <span className={s.plus}>+</span>
    </div>
    <UserForm 
    onSubmit={onSubmitForm}
    formName = "New"
    />
    </div>

}

export default NewUser