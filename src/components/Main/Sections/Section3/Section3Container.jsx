import { addUpdate, addUpdateText, setPayments, setCurrentPage, setTotalPaymentsCount, toggleIsFetching } from '../../../../Redux/section3Reducer';
import { connect } from 'react-redux';
import Section3 from './Section3'
import * as axios from 'axios';
import React from 'react';
import PreLoader from '../../Moduls/PreLoader';

class Section3Container extends React.Component {

  componentDidMount() {
    if (this.props.state.data.length === 0) {
      this.props.toggleIsFetching(true);
      axios.get(`https://hotcoffee.kz/get_payments.php?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
        .then(responce => { 
          this.props.setPayments(responce.data.payments); 
          this.props.setTotalPaymentsCount(responce.data.total);
          this.props.toggleIsFetching(false);
         });

    }
  }

  onPageChenged = (pageNumber) => {
    axios.get(`https://hotcoffee.kz/get_payments.php?page=${pageNumber}&count=${this.props.state.pageSize}`)
      .then(responce => { this.props.setPayments(responce.data.payments); console.log(responce); });
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

