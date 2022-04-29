import Section2 from './Section2';
import { connect } from 'react-redux';
import {setSec2AC} from '../../../../Redux/section2Reducer';


const mapStateToProps = (state) => {
  return {
    state: state.section2
  }
};

const mapDispatchToProps = (dispatch) => {
  return { addSec2: (newSec2) => {dispatch(setSec2AC(newSec2))}}
}

const Section2Container = connect(mapStateToProps, mapDispatchToProps)(Section2);

export default Section2Container;