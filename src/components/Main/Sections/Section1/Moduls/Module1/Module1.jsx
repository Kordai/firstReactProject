import React from 'react';
import s from './Module1.module.css';
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["АЗС 1", 200],
  ["АЗС 2", 50],
  ["Вкусмарт 1", 250],
  ["Вкусмарт 2", 280],
  ["Магазин", 320],
];

const options = {
  title: "Продажи кофе с собой",
  is3D: true,
  // colors: ['#FB7A21'],
  backgroundColor: 'burlywood',
  fontSize: '17',
  legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 15}}
};


const Module1 = () => {
  return (
    <section className={s.m1}>
      <Chart 
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}      
    />
    </section>
  );
}

export default Module1;