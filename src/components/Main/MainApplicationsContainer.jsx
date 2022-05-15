import React from 'react';
import MainApplications from './MainApplications';
import { getApplications } from '../../Redux/applicationsReducer';
import { connect } from 'react-redux';
import PreLoader from './Moduls/PreLoader';

class MainApplicationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getApplications();    
    } 
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <MainApplications 
      state={this.props.state.data}
      headTable = {this.props.state.headTable}
      formName = {this.props.state.formName}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
export default connect(mapStateToProps, {getApplications})(MainApplicationsContainer);