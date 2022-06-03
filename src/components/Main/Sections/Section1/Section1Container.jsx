import Section1 from './Section1';
import { connect } from 'react-redux';
import {setSec1} from '../../../../Redux/section1Reducer';
import { WithAuthRedirect } from '../../../../Hoc/WithAuthRedirect';

const mapStateToProps = (state) => {
  return {
    state: state.section1,
    userId:state.auth.userId
  }
};

const Section1Container = connect(mapStateToProps, {setSec1})(WithAuthRedirect(Section1));

export default Section1Container