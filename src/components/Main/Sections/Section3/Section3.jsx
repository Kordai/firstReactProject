import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';
import Form from './Moduls/Form/Form';
import * as axios from 'axios';

class Section3 extends React.Component {

  componentDidMount() {
    if (this.props.state.data.length === 0) {
      axios.get(`https://hotcoffee.kz/get_payments.php?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
      .then(responce => { this.props.setPayments(responce.data.payments); this.props.setTotalPaymentsCount(responce.data.total); });
    
    }
  }

  onPageChenged = (pageNumber) =>{
      axios.get(`https://hotcoffee.kz/get_payments.php?page=${pageNumber}&count=${this.props.state.pageSize}`)
      .then(responce => { this.props.setPayments(responce.data.payments); console.log(responce); });
  }

  render() {
     
    return (
      <section className={s.s3} >
        <Table state={this.props.state} />
        <Form state={this.props.state} onPageChenged = {this.onPageChenged} setCurrentPage = {this.props.setCurrentPage} addUpdate={this.props.addUpdate} addUpdateText={this.props.addUpdateText} />
        <Module state={this.props.state} />
      </section>
    )
  }
}


export default Section3;