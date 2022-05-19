import { getPayments, setCurrentPage, toggleBeForm, toggleBeNameForm } from '../../../../Redux/section3Reducer';
import { connect } from 'react-redux';
import Section3 from './Section3'
import React from 'react';
import PreLoader from '../../Moduls/PreLoader';

class Section3Container extends React.Component {

  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.getPayments(this.props.state.currentPage, this.props.state.pageSize)
    }
  }

  onPageChenged = (pageNumber) => {
    this.props.getPayments(pageNumber, this.props.state.pageSize)
  }

  render() {
    return <>
      {this.props.state.isFetching ? <PreLoader /> : null}
      <Section3
        getPayments={this.props.getPayments}
        form={this.props.form}
        state={this.props.state}
        onPageChenged={this.onPageChenged}
        setCurrentPage={this.props.setCurrentPage}
        toggleBeForm={this.props.toggleBeForm}
        toggleBeNameForm={this.props.toggleBeNameForm}
      />
    </>
  }
}

const mapStateToProps = (state) => {

  return {
    state: state.section3,
    form: state.form
  }
};

export default connect(mapStateToProps,
  {
    getPayments,
    setCurrentPage,
    toggleBeForm,
    toggleBeNameForm
  })(Section3Container);

