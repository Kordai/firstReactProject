import React from 'react';
import { connect } from 'react-redux';
import MainUsers from './MainUsers';
import PreLoader from './Moduls/PreLoader';
import {getUsers, toggleBeForm, newUser} from '../../Redux/usersReducer';
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { getAuthUserId, getAuthUserTeam } from '../../Redux/authSelectors';

class MainUsersContainer extends React.Component {

  componentDidMount() {

    if (this.props.state.users.length === 0) {
      this.props.getUsers()
    } 
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <MainUsers state={this.props.state}
      toggleBeForm = {this.props.toggleBeForm}
      newUser = {this.props.newUser}
      team = {this.props.team}/>
    </>)
  }

}

const mapStateToProps = (state) => {
  return {
    state: state.users,
    userId:getAuthUserId(state),
    team: getAuthUserTeam(state)
  }
};

export default connect(mapStateToProps, {getUsers, toggleBeForm, newUser})(WithAuthRedirect(MainUsersContainer))

