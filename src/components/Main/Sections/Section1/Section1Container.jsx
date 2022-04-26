import Section1 from './Section1';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.section1
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Section1Container = connect(mapStateToProps, mapDispatchToProps)(Section1);

export default Section1Container;