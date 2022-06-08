import React from 'react';
import MainApplications from './MainApplications';
import { getApplications, deleteApplications, openEditForm, toggleBeForm, openNewForm, onSubmitForm, onUdateDelivery, onUdateDeliveryAction } from '../../Redux/applicationsReducer';
import { connect } from 'react-redux';
import PreLoader from './Moduls/PreLoader';
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect';

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
      onUdateDelivery={this.props.onUdateDelivery}
      team={this.props.team}
      onUdateDeliveryAction={this.props.onUdateDeliveryAction}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.applications,
    userId:state.auth.userId,
    team: state.auth.user.team
  }
};
 
export default connect(mapStateToProps, {getApplications, deleteApplications, openEditForm, toggleBeForm, openNewForm, onSubmitForm, onUdateDelivery, onUdateDeliveryAction})(WithAuthRedirect(MainApplicationsContainer))