import React from 'react';
import { connect } from 'react-redux';
import MainUsers from './MainUsers';
import PreLoader from './Moduls/PreLoader';
import {getUsersRequst, toggleBeForm, newUser} from '../../Redux/usersReducer';
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { getAuthUserId, getAuthUserTeam } from '../../Redux/authSelectors';
import { getUsers } from '../../Redux/usersSelectors';

class MainUsersContainer extends React.PureComponent {

  componentDidMount() {

    if (this.props.state.length === 0) {
      this.props.getUsersRequst()
    } 
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <MainUsers 
      state={this.props.state}
      toggleBeForm = {this.props.toggleBeForm}
      newUser = {this.props.newUser}
      team = {this.props.team}/>
    </>)
  }

}

const mapStateToProps = (state) => {
  return {
    state: getUsers(state),
    userId: getAuthUserId(state),
    team: getAuthUserTeam(state)
  }
};

export default connect(mapStateToProps, {getUsersRequst, toggleBeForm, newUser})(WithAuthRedirect(MainUsersContainer))

