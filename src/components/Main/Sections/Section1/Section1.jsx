import React from 'react';
import s from './Section1.module.css';
import Module1 from './Moduls/Module1/Module1'

const Section1 = (props) => {

  if (props.state.lenght === 0) {
    props.addSec1(
      [
        {
          id:0,
          titleCharts: "Продажи кофе с собой",
          data: [
              ["Name", "Sales"],
              ["АЗС 1", 200],
              ["АЗС 2", 50],
              ["Вкусмарт 1", 250],
              ["Вкусмарт 2", 280],
              ["Магазин", 320],
          ]
      },
      {
          id:1,
          titleCharts: "Поступление оплаты",
          data: [
              ["Name", "Sales"],
              ["АЗС 1", 80000],
              ["АЗС 2", 35000],
              ["Вкусмарт 1", 90000],
              ["Вкусмарт 2", 95000],
              ["Магазин", 93000],
          ]
      },
      {
          id:2,
          titleCharts: "Отгружено ингредиентов",
          data: [
              ["Name", "Sales"],
              ["Молоко", 5000],
              ["Шоколад", 3000],
              ["Сахар", 6000],
              ["Размешиватель", 4000],
              ["Стаканчик", 1000],
          ]
      },
      {
          titleCharts: "Отгружено Кофе",
          data: [
              ["Name", "Sales"],
              ["АЗС 1", 2000],
              ["АЗС 2", 500],
              ["Вкусмарт 1", 1500],
              ["Вкусмарт 2", 1500],
              ["Магазин", 2000],
          ]
      }
      ]
    )
  }

  let dataOptions = props.state.map(
    val => ({
      options: {
        title: val.titleCharts,
        is3D: true,
        // colors: ['#FB7A21'],
        fontSize: '17',
        legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 15}}
      },
      data: val.data,
      id:val.id
    })
  )

  let module1Elements = dataOptions.map(
    val => <Module1 key = {val.id} data = {val.data} options = {val.options}/>
  )
  
  return (
    <section className={s.s1}>
      {module1Elements}
    </section>
  );
}

export default Section1;