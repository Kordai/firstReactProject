import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';
import Form from './Moduls/Form/Form';
import * as axios from 'axios';

const Section3 = (props) => {

  console.log(props);
  if (props.state.data.length === 0) {
    axios.get("https://hotcoffee.kz/get_payments.php").then(responce => { props.setPayments(responce.data.payments); });
  }

  return (
    <section className={s.s3}>
      <Table state={props.state} />
      <Form state={props.state} addUpdate={props.addUpdate} addUpdateText={props.addUpdateText} />
      <Module state={props.state} />
    </section>
  )
}


export default Section3;