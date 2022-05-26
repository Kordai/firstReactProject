import React from 'react';
import s from './UserProfile.module.css';
import Applications from './Applications/Applications';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import Stock from './Stock/Stock';
import UserInfoContainer from './UserInfo/UserInfoContainer';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    return <>
        <main className={s.profile}>
            <UserInfoContainer userID = {useParams().userID}/>
            <Applications />
            <DeliveryInfo />
            <Stock />
        </main>
    </>
}

export default UserProfile