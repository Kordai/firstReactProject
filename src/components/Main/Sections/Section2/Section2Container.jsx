import Section2 from './Section2';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.section2
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Section2Container = connect(mapStateToProps, mapDispatchToProps)(Section2);

export default Section2Container;