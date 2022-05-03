import MainApplications from './MainApplications';
import { addUpdate, addUpdateText, setApplication } from '../../Redux/applicationsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
const MainApplicationsContainer = connect(mapStateToProps, {setApplication,  addUpdate, addUpdateText})(MainApplications);

export default MainApplicationsContainer;