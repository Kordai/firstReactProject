import React from 'react';
import s from './UserProfile.module.css';
import userPhoto from '../../../../image/user.png'
import ModuleTextLabel from '../Moduls/ModuleTextLabel';

const UserProfile = () => {
    return <main className={s.profile}>
        <div className={s.user}>
            <span className={s.teguser}>User info</span>
            <img src={userPhoto} alt="User" className={s.img}></img>
            <div className={s.login}>
                <h4>User login: LOGIN</h4>
                <h4>User team: TEAM</h4>
            </div>
            <ModuleTextLabel teg = "First name" text = "1231321321"/>
            <ModuleTextLabel teg = "Last name" text = "1231321321"/>
            <ModuleTextLabel teg = "Address" text = "1231321321"/>
            <ModuleTextLabel teg = "City" text = "1231321321"/>
            <ModuleTextLabel teg = "Namber phone" text = "1231321321"/>
            <ModuleTextLabel teg = "E-mail" text = "1231321321"/>

            <button type='button' className={s.updateBTN}>Update</button>
            <button type='button' className={s.deleteBTN}>Delete</button>
        </div>
        <div className={s.applications}></div>
        <div className={s.info}></div>
        <div className={s.stock}></div>
    </main>

}

export default UserProfile