import React from 'react';
import { connect } from 'react-redux';
import MainUsers from './MainUsers';
import PreLoader from './Moduls/PreLoader';
import {getUsers, toggleBeForm} from '../../Redux/usersReducer';

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
      toggleBeForm = {this.props.toggleBeForm}/>
    </>)
  }

}

const mapStateToProps = (state) => {
  return {
    state: state.users
  }
};

export default connect(mapStateToProps, {getUsers, toggleBeForm})(MainUsersContainer);

