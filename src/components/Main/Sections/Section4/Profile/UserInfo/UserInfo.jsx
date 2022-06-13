import React from 'react';
import s from './UserInfo.module.css';
import userPhoto from '../../../../../image/user.png';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';
import { useNavigate } from 'react-router-dom';
import UserForm from '../../../../../Forms/UserForm/UserForm';

const UserInfo = ({user, userAttributes, deleteUser, toggleBeForm, updateUser, state}) => {    

    let userInfoData = [user.firstName, user.lastName, user.address, user.city, user.phone, user.email]
    let userInfoModule = userAttributes.map((val, i) => <ModuleTextLabel teg={val} text={userInfoData[i]} key={val} />)
    let navigate = useNavigate();
    const del = () => {
        deleteUser()
        navigate("/panelusers")
    }
    
    return <>
        <div className={s.user}>
            <span className={s.teguser}>User info</span>
            <img src={userPhoto} alt="User" className={s.img}></img>
            <div className={s.login}>
                <h4>User login: {user.login}</h4>
                <h4>User team: {user.team}</h4>
            </div>
            {userInfoModule}
            <button onClick={() => toggleBeForm(true)}  type='button' className={user.team==="Admin"? s.adminBTN:s.updateBTN}>Update</button>
            <button onClick={del}  type='button' className={user.team==="Admin"? s.adminBTN:s.deleteBTN}>Delete</button>
            <button onClick={()=> {navigate("/panelusers")} }  type='button' className={s.backBTN}>Back</button>
        </div>
        <UserForm 
        onSubmit={updateUser}
        initialValues={state.userProfileInfo} 
        formName = "Update"
         />
    </>
}

export default UserInfo