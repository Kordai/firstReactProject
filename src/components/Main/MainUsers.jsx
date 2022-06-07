import React from 'react';
import s from './MainUsers.module.css';
import Section4 from './Sections/Section4/Section4'

const MainUsers = (props) => {

    return (      
      <main className={s.u}>
        <Section4 state={props.state.users} toggleBeForm={props.toggleBeForm} newUser = {props.newUser} team="Service" activTeam = {props.team}/>
        <Section4 state={props.state.users} toggleBeForm={props.toggleBeForm} newUser = {props.newUser} team="Meneger" activTeam = {props.team}/>
        <Section4 state={props.state.users} toggleBeForm={props.toggleBeForm} newUser = {props.newUser} team="Admin" activTeam = {props.team}/>
      </main>
    )
  }

export default MainUsers;