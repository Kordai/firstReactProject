import React from 'react';
import s from './UserProfile.module.css';
import UserInfo from './UserInfo/UserInfo';
import Applications from './Applications/Applications';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import Stock from './Stock/Stock';

const UserProfile = () => {
    return <>
        <main className={s.profile}>
            <UserInfo />
            <Applications />
            <DeliveryInfo />
            <Stock />
        </main>
    </>
}

export default UserProfile