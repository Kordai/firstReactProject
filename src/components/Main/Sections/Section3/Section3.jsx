import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';
import Form from './Moduls/Form/Form';
import * as axios from 'axios';

const Section3 = (props) => {
  console.log (props.state);
  if (Object.keys(props.state).length === 0 && props.state.constructor === Object) {

    axios.get("https://hotcoffee.kz/get_payments.php").then(responce => {
     
      let data = responce.data.payments;
      props.setPayment({
        formName: "Payment",
        inputMark: {
          Point: "",
          Customer: "",
          Payment: "",
          Month: ""
        },
        headTable: ["Namber", "Point", "Customer", "Payment", "Month"],
        data: data,
        // [
        //     ["1", "Mart1", "LLC MART1", 75000, "January"],
        //     ["2", "Mart2", "LLC MART2", 90000, "January"],
        //     ["3", "GasStation1", "LLC GAS", 75000, "January"],
        //     ["4", "GasStation2", "LLC GAS", 60000, "January"],
        //     ["5", "Mart1", "LLC MART1", 79000, "March"],
        //     ["6", "Mart2", "LLC MART2", 100000, "March"],
        //     ["7", "GasStation1", "LLC GAS", 57000, "March"],
        //     ["8", "GasStation2", "LLC GAS", 85000, "March"],
        //     ["9", "Mart1", "LLC MART1", 79000, "May"],
        //     ["10", "Mart2", "LLC MART2", 100000, "May"],
        //     ["11", "GasStation1", "LLC GAS", 57000, "May"]
        // ],
        dataChart: [
          ["Month", "Payment"],
          ["January", 330000],
          ["February", 274000],
          ["March", 270000],
          ["April", 465000],
          ["May", 468000],
          ["June", 501000],
          ["July", 330000],
          ["August", 330000],
          ["September", 250000],
          ["October", 450000],
          ["November", 400000],
          ["December", 350000],
        ],
        options: {
          title: "Company Payments",
          hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 },
          chartArea: { width: "80%", height: "70%" }
        }

      });
    });
  }
  return (
    <section className={s.s3}>
      <Table state={props.state} />
      <Form state={props.state} addUpdate={props.addUpdate} addUpdateText={props.addUpdateText} />
      <Module state={props.state} />
    </section>
  );
}

export default Section3;