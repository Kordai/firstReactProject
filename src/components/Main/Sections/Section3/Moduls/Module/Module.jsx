import React from 'react';
import s from './Module.module.css';
import { Chart } from "react-google-charts";

const Module = (props) => {
  return (
    <section className={s.m2}>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={props.state.dataChart}
        options={props.state.options}
      />
    </section>
  );
}

export default Module;