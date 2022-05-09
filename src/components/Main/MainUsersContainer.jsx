import React from 'react';
import { connect } from 'react-redux';
import MainUsers from './MainUsers';
import PreLoader from './Moduls/PreLoader';
import { setNewUsers, toggleIsFetching } from '../../Redux/usersReducer';
import ConnectToServer from '../../APIConnect/ConnectToServer';

class MainUsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.state.users.length === 0) {
      this.props.toggleIsFetching(true);
      ConnectToServer.getUsers().then(data => 
      { this.props.setNewUsers(data.users);
        this.props.toggleIsFetching(false); });      
    } 
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <MainUsers state={this.props.state}/>
    </>)
  }

}

const mapStateToProps = (state) => {
  return {
    state: state.users
  }
};

export default connect(mapStateToProps, { setNewUsers, toggleIsFetching })(MainUsersContainer);

