import React from 'react';
import s from './UserInfo.module.css';
import userPhoto from '../../../../../image/user.png';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';

const UserInfo = (props) => {    

    let userInfoModule = props.userAttributes.map(val => <ModuleTextLabel teg={val} text={val} key={val} />)

    return <>
        <div className={s.user}>
            <span className={s.teguser}>User info</span>
            <img src={userPhoto} alt="User" className={s.img}></img>
            <div className={s.login}>
                <h4>User login: {props.userID}</h4>
                <h4>User team: TEAM</h4>
            </div>
            {userInfoModule}
            <button type='button' className={s.updateBTN}>Update</button>
            <button type='button' className={s.deleteBTN}>Delete</button>
        </div>
    </>
}

export default UserInfo