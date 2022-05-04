
import { addUpdate, addUpdateText, setPayment } from '../../../../Redux/section3Reducer';
import { connect } from 'react-redux';
import Section3 from './Section3'

const mapStateToProps = (state) => {
  
  return {
    state: state.section3
  }
};

const Section3Container = connect(mapStateToProps, {setPayment, addUpdateText, addUpdate})(Section3);

export default Section3Container;