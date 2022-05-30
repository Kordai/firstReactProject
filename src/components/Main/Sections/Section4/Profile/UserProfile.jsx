import React from 'react';
import s from './UserProfile.module.css';
import DeliveryInfoContainer from './DeliveryInfo/DeliveryInfoContainer';
import StockContainer from './Stock/StockContainer';
import UserInfoContainer from './UserInfo/UserInfoContainer';
import { useParams } from 'react-router-dom';
import ApplicationsContainer from './Applications/ApplicationsContainer';

const UserProfile = () => {
    return <>
        <main className={s.profile}>
            <UserInfoContainer userID = {useParams().userID}/>
            <ApplicationsContainer />
            <DeliveryInfoContainer />
            <StockContainer />
        </main>
    </>
}

export default UserProfile