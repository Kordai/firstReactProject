import React from 'react';
import s from './Section3.module.css';
import Module from './Moduls/Module/Module'
import Table from './Moduls/Tabel/Table';

const Section3 = (props) => {

  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  }

  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  }

  return (
    <section className={s.s3}>
      <Table state={props.state} />
      <div>
        <button className={s.openButton}>Add Payment</button>
        <div className={s.formPopup}>
          <form action="#" className={s.formContainer}>
            <h1>Подписаться</h1>
            <label for="name"><b>Имя</b></label>
            <input type="text" placeholder="Ваше имя" name="name" required />
            <label for="email"><b>Е-мейл</b></label>
            <input type="text" placeholder="Ваш е-мейл" name="email" required />
            <button className={s.btn}>Отправить</button>
            <button className={s.btnCancel}>Закрыть</button>
          </form>
        </div>
      </div>
      <Module state={props.state} />
    </section>
  );
}

export default Section3;