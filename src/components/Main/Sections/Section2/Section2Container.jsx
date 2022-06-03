import Section2 from './Section2';
import { connect } from 'react-redux';
import {setSec2} from '../../../../Redux/section2Reducer';
import { WithAuthRedirect } from '../../../../Hoc/WithAuthRedirect';


const mapStateToProps = (state) => {
  return {
    state: state.section2,
    userId:state.auth.userId
  }
};

const Section2Container = connect(mapStateToProps, {setSec2})(WithAuthRedirect(Section2));

export default Section2Container;