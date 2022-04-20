import React from 'react';
import s from './Module1.module.css';
import { Chart } from "react-google-charts";

const Module1 = (props) => {
  return (
    <section className={s.m1}>
      <Chart 
      chartType="PieChart"
      data={props.data}
      options={props.options}
      width={"100%"}
      height={"90%"}      
    />
    </section>
  );
}

export default Module1;