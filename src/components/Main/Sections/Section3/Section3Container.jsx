import { addUpdate, addUpdateText, setPayments, setCurrentPage, setTotalPaymentsCount, toggleIsFetching } from '../../../../Redux/section3Reducer';
import { connect } from 'react-redux';
import Section3 from './Section3'
import React from 'react';
import PreLoader from '../../Moduls/PreLoader';
import ConnectToServer from '../../../../APIConnect/ConnectToServer';

class Section3Container extends React.Component {

  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.toggleIsFetching(true);
      ConnectToServer.getPayments(this.props.state.currentPage, this.props.state.pageSize)
        .then(data => { 
          this.props.setPayments(data.payments); 
          this.props.setTotalPaymentsCount(data.total);
          this.props.toggleIsFetching(false);
         });
    }
  }

  onPageChenged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    ConnectToServer.getPayments(pageNumber, this.props.state.pageSize)
      .then(data => { 
        this.props.setPayments(data.payments); 
        this.props.toggleIsFetching(false); });
  }

  render() {
    return <>
    {this.props.state.isFetching ? <PreLoader/> : null}
    <Section3
      state={this.props.state}
      onPageChenged={this.onPageChenged}
      setCurrentPage={this.props.setCurrentPage}
      addUpdate={this.props.addUpdate}
      addUpdateText={this.props.addUpdateText} />
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
    setPayments,
    addUpdateText,
    addUpdate,
    setCurrentPage,
    setTotalPaymentsCount,
    toggleIsFetching
  })(Section3Container);

