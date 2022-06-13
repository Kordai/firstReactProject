import React from 'react';
import s from './Module1.module.css';
import { Chart } from "react-google-charts";

const Module1 = ({data, options}) => {
  return (
    <section className={s.m1}>
      <Chart 
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"90%"}      
    />
    </section>
  );
}

export default Module1;