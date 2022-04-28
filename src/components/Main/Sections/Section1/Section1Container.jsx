import Section1 from './Section1';
import { connect } from 'react-redux';
import {setSec1AC} from '../../../../Redux/section1Reducer';

const mapStateToProps = (state) => {
  return {
    state: state.section1
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSec1: (newSec1) => {dispatch(setSec1AC(newSec1))}
  }
}

const Section1Container = connect(mapStateToProps, mapDispatchToProps)(Section1);

export default Section1Container;