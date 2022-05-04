import { connect } from 'react-redux';
import MainUsers from './MainUsers';
import { setNewUsers, toggleIsFetching } from '../../Redux/usersReducer';

const mapStateToProps = (state) => {
  return {
    state: state.users
  }
};

const MainUsersContainer = connect(mapStateToProps, { setNewUsers, toggleIsFetching })(MainUsers);

export default MainUsersContainer;