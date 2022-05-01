import { connect } from 'react-redux';
import MainUsers from './MainUsers';
import { setUsersAC } from '../../Redux/usersReducer';

const mapStateToProps = (state) => {
    return {
      state: state.users
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setNewUsers: (newUsers) => {
        dispatch(setUsersAC(newUsers));
      }
    }
  }
  
  const MainUsersContainer = connect(mapStateToProps, mapDispatchToProps)(MainUsers);
  
  export default MainUsersContainer;