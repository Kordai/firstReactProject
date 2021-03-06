import Section1 from './Section1';
import { connect } from 'react-redux';
import {setSec1} from '../../../../Redux/section1Reducer';
import { WithAuthRedirect } from '../../../../Hoc/WithAuthRedirect';
import { getSection1Data } from '../../../../Redux/section1Selectors';
import { getAuthUserId } from '../../../../Redux/authSelectors';

const mapStateToProps = (state) => {
  return {
    state: getSection1Data(state),
    userId: getAuthUserId(state)
  }
};

const Section1Container = connect(mapStateToProps, {setSec1})(WithAuthRedirect(Section1));

export default Section1Container