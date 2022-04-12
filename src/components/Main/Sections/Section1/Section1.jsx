import React from 'react';
import s from './Section1.module.css';
import Module1 from './Moduls/Module1/Module1'

const data = [
  ["Task", "Hours per Day"],
  ["АЗС 1", 200],
  ["АЗС 2", 50],
  ["Вкусмарт 1", 250],
  ["Вкусмарт 2", 280],
  ["Магазин", 320],
];

let titleCharts = "Продажи кофе с собой";

const options = {
  title: titleCharts,
  is3D: true,
  // colors: ['#FB7A21'],
  backgroundColor: 'burlywood',
  fontSize: '17',
  legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 15}}
};


const Section1 = () => {
  return (
    <section className={s.s1}>
      {/* Комент */}
      <Module1 data = {data} options = {options}/>
      <Module1 data = {data} options = {options}/>
      <Module1 data = {data} options = {options}/>
      <Module1 data = {data} options = {options}/>
    </section>
  );
}

export default Section1;