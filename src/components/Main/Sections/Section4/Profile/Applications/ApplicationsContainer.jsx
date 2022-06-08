import React from 'react';
import Applications from './Applications';
import { getApplicationsRequest } from '../../../../../../Redux/applicationsReducer';
import { connect } from 'react-redux';
import PreLoader from '../../../../Moduls/PreLoader';
import { getApplications } from '../../../../../../Redux/applicationsSelectors';

class ApplicationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getApplicationsRequest();    
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
    state: getApplications(state)
  }
};
 
export default connect(mapStateToProps, {getApplicationsRequest})(ApplicationsContainer);