import { connect } from 'react-redux';
import MainUsers from './MainUsers';
import { setNewUsers } from '../../Redux/usersReducer';

const mapStateToProps = (state) => {
  return {
    state: state.users
  }
};

const MainUsersContainer = connect(mapStateToProps, { setNewUsers })(MainUsers);

export default MainUsersContainer;