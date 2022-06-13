import React from 'react';
import s from './Module2.module.css';
import { Chart } from "react-google-charts";

const Module2 = ({state}) => {
  return (
    <section className={s.m2}>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={state.data}
        options={state.options}
      />
    </section>
  );
}

export default Module2;