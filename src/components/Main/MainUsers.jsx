import React from 'react';
import s from './MainUsers.module.css';
import Section4 from './Sections/Section4/Section4'

const MainUsers = (props) => {

    return (      
      <main className={s.u}>
        <Section4 state={props.state.users} team="Service" />
        <Section4 state={props.state.users} team="Meneger" />
        <Section4 state={props.state.users} team="Admin" />
      </main>
    )
  }

export default MainUsers;