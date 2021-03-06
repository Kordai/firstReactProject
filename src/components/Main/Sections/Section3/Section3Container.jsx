import { getPayments, toggleBeForm, openEditForm, onSubmitForm, openAddForm, onUdatePayment, onDeletePayment } from '../../../../Redux/section3Reducer';
import { connect } from 'react-redux';
import Section3 from './Section3'
import React from 'react';
import PreLoader from '../../Moduls/PreLoader';
import { WithAuthRedirect } from '../../../../Hoc/WithAuthRedirect';
import { getAuthUserId, getAuthUserTeam } from '../../../../Redux/authSelectors';
import { getSection3Data } from '../../../../Redux/section3Selectors';

class Section3Container extends React.PureComponent {

  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getPayments(this.props.state.currentPage, this.props.state.pageSize)
    }
  }

  onPageChenged = (pageNumber) => {
    this.props.getPayments(pageNumber, this.props.state.pageSize)
  }

  closeForm = () => {
    this.props.toggleBeForm(false)
  }

  render() {
    return <>

      {this.props.state.isFetching ? <PreLoader /> : null}
      <Section3
        state={this.props.state}
        closeForm={this.closeForm}
        onSubmitForm={this.props.onSubmitForm}
        openForm={this.props.openAddForm}
        onPageChenged={this.onPageChenged}
        openEditForm={this.props.openEditForm}
        onUdatePayment={this.props.onUdatePayment}
        onDeletePayment={this.props.onDeletePayment}
        team={this.props.team}
      />
    </>
  }
}

const mapStateToProps = (state) => {

  return {
    state: getSection3Data(state),
    userId: getAuthUserId(state),
    team: getAuthUserTeam(state)
  }
};

export default connect(mapStateToProps,
  {
    getPayments,
    toggleBeForm,
    openEditForm,
    onSubmitForm,
    openAddForm,
    onUdatePayment,
    onDeletePayment
  }
)(WithAuthRedirect(Section3Container));

