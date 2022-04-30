import React from 'react';
import s from './MainUsers.module.css';
import Section4 from './Sections/Section4/Section4'

const MainUsers = (props) => {  
//   if (props.state.length === 0) {
//     props.setNewUsers({
      
//   });
 // }
  return (
    <main className={s.u}>
        <Section4/>
        <Section4/>
        <Section4/>
    </main>
  );
}

export default MainUsers;