import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';

const Section2 = (props) => {
  return (
    <section className={s.s3}>
      <Table state={props.state}/>
      <Module state={props.state}/>
    </section>
  );
}

export default Section2;