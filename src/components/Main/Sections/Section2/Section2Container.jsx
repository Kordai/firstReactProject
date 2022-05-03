import Section2 from './Section2';
import { connect } from 'react-redux';
import {setSec2} from '../../../../Redux/section2Reducer';


const mapStateToProps = (state) => {
  return {
    state: state.section2
  }
};

const Section2Container = connect(mapStateToProps, {setSec2})(Section2);

export default Section2Container;