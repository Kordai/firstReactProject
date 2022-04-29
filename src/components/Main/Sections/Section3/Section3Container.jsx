import Section3 from './Section3'
import { uPActionCreator, uPDActionCreator, setPaymentCA } from '../../../../Redux/section3Reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.section3
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUAction: (name, value) => {
      dispatch(uPActionCreator(name, value));
    },
    addUDAction: () => {
      dispatch(uPDActionCreator());
    },
    setNewPayments: (newPayments) => {
      dispatch(setPaymentCA(newPayments));
    }
  }
}

const Section3Container = connect(mapStateToProps, mapDispatchToProps)(Section3);

export default Section3Container;