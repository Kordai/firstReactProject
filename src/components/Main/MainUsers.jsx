import * as axios from 'axios';
import React from 'react';
import s from './MainUsers.module.css';
import Section4 from './Sections/Section4/Section4'

class MainUsers extends React.Component {

  componentDidMount() {
    if (this.props.state.length === 0) {
      axios.get("https://hotcoffee.kz/get_users.php").then(responce => { this.props.setNewUsers(responce.data.users); });
    }
  }

  render() {
    return (
      <main className={s.u}>
        <Section4 state={this.props.state} team="Service" />
        <Section4 state={this.props.state} team="Meneger" />
        <Section4 state={this.props.state} team="Admin" />
      </main>
    )
  }

}

export default MainUsers;