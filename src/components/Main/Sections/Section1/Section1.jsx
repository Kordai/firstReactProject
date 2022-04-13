import React from 'react';
import s from './Section1.module.css';
import Module1 from './Moduls/Module1/Module1'

const Section1 = (props) => {

  let dataOptions = props.state.map(
    val => ({
      options: {
        title: val.titleCharts,
        is3D: true,
        // colors: ['#FB7A21'],
        fontSize: '17',
        legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 15}}
      },
      data: val.data
    })
  )

  let module1Elements = dataOptions.map(
    val => <Module1 data = {val.data} options = {val.options}/>
  )
  
  return (
    <section className={s.s1}>
      {module1Elements}
    </section>
  );
}

export default Section1;