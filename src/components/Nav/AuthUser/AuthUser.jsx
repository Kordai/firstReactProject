import React from 'react';
import s from './AuthUser.module.css';
import userPhoto from '../../image/user.png';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../Forms/LoginForm/LoginForm';

const AuthUser = (props) => {    

    let navigate = useNavigate();

    if (props.user.id === null) {
        return <LoginForm
        onSubmit={props.authUser}/>
    }
       
    return <>
        <div className={s.user}>            
            <img src={userPhoto} alt="User" className={s.img}></img>
            <div className={s.login}>
                <h4>{props.user.firstName}</h4>
                <h4>{props.user.lastName}</h4>
            </div>            
            
            <button onClick={()=> {navigate("/login")} }  type='button' className={s.logout}>Logout</button>
        </div>
        
    </>
}

export default AuthUser