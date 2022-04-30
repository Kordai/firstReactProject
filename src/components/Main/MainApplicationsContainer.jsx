import MainApplications from './MainApplications';
import { uAActionCreator, uADActionCreator, setApplicationCA } from '../../Redux/applicationsReducer';
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
    },
    setNewApplications: (newApplications) => {
      dispatch(setApplicationCA(newApplications));
    }
  }
}

const MainApplicationsContainer = connect(mapStateToProps, mapDispatchToProps)(MainApplications);

export default MainApplicationsContainer;