import { render } from '@testing-library/react';
import * as axios from 'axios';
import React from 'react';
import s from './MainUsers.module.css';
import Section4 from './Sections/Section4/Section4'

class MainUsers extends React.Component {

  constructor(props){
    
    super(props);
    axios.get("https://hotcoffee.kz/get_users.php").then(responce => {
      this.props.setNewUsers(responce.data.users);
    });
    
  }
  admin = [];//"Admin"
  meneger = [];//"Meneger"
  service = [];//"Service"
  
    
  
  qqq = this.props.state.map(
    val => {
      switch (val.team) {
        case "Admin":
          this.admin.push(val);
          return val;
          break;
        case "Meneger":
          this.meneger.push(val);
          return val;
          break;
        case "Service":
          this.service.push(val);
          return val;
          break;
        default:
          return val;
          break;
      }
    }
  );
  
  render() {
    return (
      <main className={s.u}>
        <Section4 state={this.service} />
        <Section4 state={this.meneger} />
        <Section4 state={this.admin} />
      </main>
    )
  }
  
}

export default MainUsers;