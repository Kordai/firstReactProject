import MainApplications from './MainApplications';
import { uAActionCreator, uADActionCreator } from '../../Redux/applicationsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUAction: (name, value) => {
      dispatch(uAActionCreator(name, value));
    },
    addUDAction: () => {
      dispatch(uADActionCreator());
    }
  }
}

const MainApplicationsContainer = connect(mapStateToProps, mapDispatchToProps)(MainApplications);

export default MainApplicationsContainer;