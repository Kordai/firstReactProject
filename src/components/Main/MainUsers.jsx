import * as axios from 'axios';
import React from 'react';
import s from './MainUsers.module.css';
import PreLoader from './Moduls/PreLoader';
import Section4 from './Sections/Section4/Section4'

class MainUsers extends React.Component {

  componentDidMount() {
    if (this.props.state.users.length === 0) {
      this.props.toggleIsFetching(true);
      axios.get("https://hotcoffee.kz/get_users.php").then(responce => { this.props.setNewUsers(responce.data.users); });
      this.props.toggleIsFetching(false);
    } 
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <main className={s.u}>
        <Section4 state={this.props.state.users} team="Service" />
        <Section4 state={this.props.state.users} team="Meneger" />
        <Section4 state={this.props.state.users} team="Admin" />
      </main>
    </>)
  }

}

export default MainUsers;