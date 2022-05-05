import { addUpdate, addUpdateText, setPayments, setCurrentPage, setTotalPaymentsCount } from '../../../../Redux/section3Reducer';
import { connect } from 'react-redux';
import Section3 from './Section3'

const mapStateToProps = (state) => {
  
  return {
    state: state.section3
  }
};

const Section3Container = connect(mapStateToProps, {setPayments, addUpdateText, addUpdate, setCurrentPage, setTotalPaymentsCount})(Section3);

export default Section3Container;