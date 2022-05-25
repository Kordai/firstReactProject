import React from 'react';
import s from './UserProfile.module.css';
import userPhoto from '../../../../image/user.png'

const UserProfile = () => {
    return <main className={s.profile}>
        <div className={s.user}>
            <span className={s.teguser}>User info</span>
            <img src={userPhoto} alt="User Photo" className={s.img}></img>
            <div className={s.login}>
                <h4>User login: LOGIN</h4>
                <h4>User team: TEAM</h4>
            </div>
            <div className={s.data}>
                <span className={s.tegdata}>First name</span>
                <span className={s.text}> 1231321321</span>
            </div>
            <div className={s.data}>
                <span className={s.tegdata}>Last name</span>
                <span className={s.text}> 1231321321</span>
            </div>
            <div className={s.data}>
                <span className={s.tegdata}>Address</span>
                <span className={s.text}> 1231321321</span>
            </div>
            <div className={s.data}>
                <span className={s.tegdata}>City</span>
                <span className={s.text}> 1231321321</span>
            </div>
            <div className={s.data}>
                <span className={s.tegdata}>Namber phone</span>
                <span className={s.text}> 1231321321</span>
            </div>
            <div className={s.data}>
                <span className={s.tegdata}>E-mail</span>
                <span className={s.text}> 1231321321</span>
            </div>
            <div className={s.footer}>
            <span className={s.rating}>Rating</span>
            <span className={s.date}>25-02-2022</span>
            </div>
            
        </div>
        <div className={s.applications}></div>
        <div className={s.info}></div>
        <div className={s.stock}></div>
    </main>

}

export default UserProfile