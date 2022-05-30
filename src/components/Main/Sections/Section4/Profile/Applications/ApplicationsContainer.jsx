import React from 'react';
import Applications from './Applications';
import { getApplications } from '../../../../../../Redux/applicationsReducer';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';

class ApplicationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getApplications();    
    } 
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <Applications 
      state={this.props.state.data}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
export default connect(mapStateToProps, {getApplications})(ApplicationsContainer);