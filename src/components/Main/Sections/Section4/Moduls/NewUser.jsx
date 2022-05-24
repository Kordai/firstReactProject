import React from 'react';
import s from './NewUser.module.css';

const NewUser = (props) =>{

    return <div className={s.noActive}>
    <div className={s.newUser}>
        <span className={s.plus}>+</span>
    </div>
    </div>

}

export default NewUser