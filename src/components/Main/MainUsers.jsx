import * as axios from 'axios';
import React from 'react';
import s from './MainUsers.module.css';
import Section4 from './Sections/Section4/Section4'
import imgLoading from '../../image/CurveLoading.gif'

class MainUsers extends React.Component {

  componentDidMount() {
    if (this.props.state.users.length === 0) {
      axios.get("https://hotcoffee.kz/get_users.php").then(responce => { this.props.setNewUsers(responce.data.users); });
    }
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <img src={imgLoading} alt = 'Loading'/> : null}
      <main className={s.u}>
        <Section4 state={this.props.state.users} team="Service" />
        <Section4 state={this.props.state.users} team="Meneger" />
        <Section4 state={this.props.state.users} team="Admin" />
      </main>
    </>)
  }

}

export default MainUsers;