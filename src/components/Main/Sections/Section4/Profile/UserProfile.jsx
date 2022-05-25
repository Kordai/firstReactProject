import React from 'react';
import s from './UserProfile.module.css';

const UserProfile = () => {
    return <main className={s.profile}>
        <div className={s.user}></div>
        <div className={s.applications}></div>
        <div className={s.info}></div>
        <div className={s.stock}></div>
    </main>

}

export default UserProfile