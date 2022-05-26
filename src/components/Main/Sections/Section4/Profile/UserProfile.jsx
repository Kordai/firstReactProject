import React from 'react';
import s from './UserProfile.module.css';
import userPhoto from '../../../../image/user.png'
import ModuleTextLabel from './Moduls/ModuleTextLabel';

const UserProfile = () => {

    let userAttributes =
        [
            "First name",
            "Last name",
            "Address",
            "City",
            "Namber phone",
            "E-mail"
        ]

    let stockAttributes =
        [
            "Coffee ",
            "Milk ",
            "Cups ",
            "Sugar "
        ]

    let userInfoModule = userAttributes.map(val => <ModuleTextLabel teg={val} text={val} key={val} />)
    let stockModule = stockAttributes.map(val => <ModuleTextLabel teg={val} text={val} key={val} />)

    return <>
        <main className={s.profile}>
            <div className={s.user}>
                <span className={s.teguser}>User info</span>
                <img src={userPhoto} alt="User" className={s.img}></img>
                <div className={s.login}>
                    <h4>User login: LOGIN</h4>
                    <h4>User team: TEAM</h4>
                </div>
                {userInfoModule}
                <button type='button' className={s.updateBTN}>Update</button>
                <button type='button' className={s.deleteBTN}>Delete</button>
            </div>
            <div className={s.applications}>
                <span className={s.teguser}>Applications</span>
            </div>
            <div className={s.info}>
                <span className={s.teguser}>Info</span>
            </div>
            {/* //Coffee	Milk	Cups	Sugar */}
            <div className={s.stock}>
                <span className={s.teguser}>Stock</span>
                <div className={s.stockModule}>
                    {stockModule}
                </div>
                
            </div>


        </main>
    </>
}

export default UserProfile