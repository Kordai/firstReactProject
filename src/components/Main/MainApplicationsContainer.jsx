import React from 'react';
import MainApplications from './MainApplications';
import { getApplicationsRequest, deleteApplications, openEditForm, toggleBeForm, openNewForm, onSubmitForm, onUdateDelivery, onUdateDeliveryAction } from '../../Redux/applicationsReducer';
import { connect } from 'react-redux';
import PreLoader from './Moduls/PreLoader';
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { getAuthUserId, getAuthUserTeam } from '../../Redux/authSelectors';
import { getApplications } from '../../Redux/applicationsSelectors';

class MainApplicationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getApplicationsRequest();    
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
    state: getApplications(state),
    userId:getAuthUserId(state),
    team: getAuthUserTeam(state)
  }
};
 
export default connect(mapStateToProps, {getApplicationsRequest, deleteApplications, openEditForm, toggleBeForm, openNewForm, onSubmitForm, onUdateDelivery, onUdateDeliveryAction})(WithAuthRedirect(MainApplicationsContainer))