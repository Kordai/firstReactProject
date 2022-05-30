import React from 'react';
import s from './UserProfile.module.css';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import Stock from './Stock/Stock';
import UserInfoContainer from './UserInfo/UserInfoContainer';
import { useParams } from 'react-router-dom';
import ApplicationsContainer from './Applications/ApplicationsContainer';

const UserProfile = () => {
    return <>
        <main className={s.profile}>
            <UserInfoContainer userID = {useParams().userID}/>
            <ApplicationsContainer />
            <DeliveryInfo />
            <Stock />
        </main>
    </>
}

export default UserProfile