import Section2 from './Section2';
import { connect } from 'react-redux';
import {setSec2} from '../../../../Redux/section2Reducer';
import { WithAuthRedirect } from '../../../../Hoc/WithAuthRedirect';
import { getSection2Data } from '../../../../Redux/section2Selectors';
import { getAuthUserId } from '../../../../Redux/authSelectors';


const mapStateToProps = (state) => {
  return {
    state: getSection2Data(state),
    userId: getAuthUserId(state)
  }
};

const Section2Container = connect(mapStateToProps, {setSec2})(WithAuthRedirect(Section2));

export default Section2Container;