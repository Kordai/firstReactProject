import React from 'react';
import s from './Module.module.css';
import { Chart } from "react-google-charts";

const Module = ({state}) => {
  return (
    <section className={s.m2}>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={state.dataChart}
        options={state.options}
      />
    </section>
  );
}

export default Module;