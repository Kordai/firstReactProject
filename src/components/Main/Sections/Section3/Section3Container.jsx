import { getPayments, setCurrentPage } from '../../../../Redux/section3Reducer';
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
        state={this.props.state}
        onPageChenged={this.onPageChenged}
        setCurrentPage={this.props.setCurrentPage}
         />
    </>
  }
}

const mapStateToProps = (state) => {

  return {
    state: state.section3
  }
};

export default connect(mapStateToProps,
  {
    getPayments,
    setCurrentPage
  })(Section3Container);

