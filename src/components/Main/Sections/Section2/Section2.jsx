import React from 'react';
import s from './Section2.module.css';
import Module2 from './Moduls/Module2/Module2'

const Section2 = (props) => {
  if (props.state.length === 0) {
    props.setSec2([
      {
        id: 0,
        data: [
          ["Месяц", "АЗС 1", "АЗС 2", "Вкусмарт1", "Вкусмарт1", "Магазин"],
          ["Январь", 80000, 25000, 75000, 70000, 80000],
          ["Февраль", 65000, 30000, 80000, 55000, 44000],
          ["Март", 55000, 40000, 55000, 65000, 55000],
          ["Апрель", 90000, 70000, 115000, 90000, 90000],
          ["Май", 95000, 65000, 120000, 95000, 93000],
          ["Июнь", 101000, 55000, 115000, 125000, 95000],
          // ["Июль", 80000, 25000, 75000, 70000, 80000],
          // ["Август", 80000, 25000, 75000, 70000, 80000],
          // ["Сентябрь", 80000, 25000, 75000, 70000, 80000],
          // ["Октябрь", 80000, 25000, 75000, 70000, 80000],
          // ["Ноябрь", 80000, 25000, 75000, 70000, 80000],
          // ["Декабрь", 80000, 25000, 75000, 70000, 80000],
        ],
        options: {
          chart: {
            title: "График доходности",
            subtitle: "Доход кофе точек за 1 полугодие 2021 год.",
          },
        }
      },
      {
        id: 1,
        data: [
          ["Месяц", "АЗС 1", "АЗС 2", "Вкусмарт1", "Вкусмарт1", "Магазин"],
          ["Январь", 350, 150, 220, 165, 230],
          ["Февраль", 320, 170, 225, 180, 250],
          ["Март", 300, 200, 270, 200, 230],
          ["Апрель", 250, 220, 291, 240, 270],
          ["Май", 265, 210, 302, 280, 260],
          ["Июнь", 320, 150, 320, 295, 310],
          // ["Июль", 80000, 25000, 75000, 70000, 80000],
          // ["Август", 80000, 25000, 75000, 70000, 80000],
          // ["Сентябрь", 80000, 25000, 75000, 70000, 80000],
          // ["Октябрь", 80000, 25000, 75000, 70000, 80000],
          // ["Ноябрь", 80000, 25000, 75000, 70000, 80000],
          // ["Декабрь", 80000, 25000, 75000, 70000, 80000],
        ],
        options: {
          chart: {
            title: "График продаж кофе",
            subtitle: "Количество проданного кофе за 1 полугодие 2021 год.",
          },
        }
      }
    ])
  }
  let dataOptions = props.state.map(
    val => <Module2 key={val.id} state={val} />
  );

  return (
    <section className={s.s2}>
      {dataOptions}
    </section>
  );
}

export default Section2;