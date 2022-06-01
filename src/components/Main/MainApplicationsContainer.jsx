import React from 'react';
import MainApplications from './MainApplications';
import { getApplications, deleteApplications, openEditForm, toggleBeForm, openNewForm, onSubmitForm, onUdateDelivery } from '../../Redux/applicationsReducer';
import { connect } from 'react-redux';
import PreLoader from './Moduls/PreLoader';

class MainApplicationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getApplications();    
    } 
  }

  closeForm = () => {
    this.props.toggleBeForm(false)
  }

  render() {
    return (<>
      {this.props.state.isFetching ? <PreLoader/> : null}
      <MainApplications 
      state={this.props.state}
      deleteApplications={this.props.deleteApplications}
      closeForm={this.closeForm}
      openEditForm={this.props.openEditForm}
      openNewForm={this.props.openNewForm}
      onSubmitForm={this.props.onSubmitForm}
      onUdateDelivery={this.props.onUdateDelivery}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications
  }
};
 
export default connect(mapStateToProps, {getApplications, deleteApplications, openEditForm, toggleBeForm, openNewForm, onSubmitForm, onUdateDelivery})(MainApplicationsContainer);