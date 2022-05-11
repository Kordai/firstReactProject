import React from 'react';
import MainApplications from './MainApplications';
import { addUpdate, addUpdateText, setApplication, toggleIsFetching } from '../../Redux/applicationsReducer';
import { connect } from 'react-redux';
import ConnectToServer from '../../APIConnect/ConnectToServer';
import PreLoader from './Moduls/PreLoader';

class MainApplicationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.toggleIsFetching(true);
      ConnectToServer.getApplications().then(data => 
      { this.props.setApplication(data.applications);
        this.props.toggleIsFetching(false); });      
    } 
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <MainApplications state={this.props.state.data}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
export default connect(mapStateToProps, {setApplication, toggleIsFetching, addUpdate, addUpdateText})(MainApplicationsContainer);