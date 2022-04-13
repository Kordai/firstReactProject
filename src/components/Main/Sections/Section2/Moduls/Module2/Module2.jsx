import React from 'react';
import s from './Module2.module.css';
import { Chart } from "react-google-charts";

const Module2 = (props) => {
  return (
    <section className={s.m2}>
       <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={props.state.data}
      options={props.state.options}
    />
    </section>
  );
}

export default Module2;