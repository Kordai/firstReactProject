import React from 'react';
import s from './NewUser.module.css';

const NewUser = (props) =>{

    const newUser = () => {
        alert("NEW USER "+ props.team)
    }

    return <div className={s.noActive}>
    <div onClick={newUser} className={s.newUser}>
        <span className={s.plus}>+</span>
    </div>
    </div>

}

export default NewUser