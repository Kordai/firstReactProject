import * as axios from 'axios';
import React from 'react';
import s from './MainUsers.module.css';
import Section4 from './Sections/Section4/Section4'

const MainUsers = (props) => {
  if (props.state.length === 0) {
    axios.get("https://hotcoffee.kz/get_users.php").then(responce => {
      props.setNewUsers(responce.data.users);
    });
  }
  let admin = [];//"Admin"
  let meneger = [];//"Meneger"
  let service = [];//"Service"
  let qqq = props.state.map(
    val => {
      switch (val.team) {
        case "Admin":
          admin.push(val);
          return val;
          break;
        case "Meneger":
          meneger.push(val);
          return val;
          break;
        case "Service":
          service.push(val);
          return val;
          break;
        default:
          return val;
          break;
      }
    }
  );
  console.log(admin, meneger, service);
  return (
    <main className={s.u}>

      <Section4 state={service} />
      <Section4 state={meneger} />
      <Section4 state={admin} />
    </main>
  );
}

export default MainUsers;