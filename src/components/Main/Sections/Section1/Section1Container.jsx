import Section1 from './Section1';
import { connect } from 'react-redux';
import {setSec1} from '../../../../Redux/section1Reducer';

const mapStateToProps = (state) => {
  return {
    state: state.section1
  }
};

const Section1Container = connect(mapStateToProps, {setSec1})(Section1);

export default Section1Container;