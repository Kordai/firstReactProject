import React from 'react';
import s from './MainApplications.module.css';
import Form from './Sections/Section3/Moduls/Form/Form';
import Table from './Sections/Section3/Moduls/Tabel/Table';

const MainApplications = (props) => {  
  if (Object.keys(props.state).length === 0 && props.state.constructor === Object) {
    props.setNewApplications({
      formName: "Application",
      inputMark: {
          Point: "",
          Coffee: "",
          Milk: "",
          Cups: "",
          Sugar: "",
          Data: ""
      },
      headTable: ["Naber", "Point", "Coffee", "Milk", "Cups", "Sugar", "Data"],
      data: [
          ["1", "Mart1", 1, 2, 200, 2, "12-10-2021"],
          ["2", "Mart2", 1, 2, 300, 2, "13-10-2021"],
          ["3", "GasStation1", 1, 2, 100, 2, "13-10-2021"],
          ["4", "GasStation2", 1, 2, 100, 2, "14-10-2021"],
          ["5", "Mart1", 1, 2, 100, 2, "15-10-2021"],
          ["6", "Mart2", 1, 2, 100, 2, "16-10-2021"],
          ["7", "GasStation1", 1, 2, 50, 2, "16-10-2021"],
          ["8", "GasStation2", 1, 2, 50, 2, "18-10-2021"],
          ["9", "Mart1", 1, 2, 200, 2, "01-11-2021"],
          ["10", "Mart2", 1, 2, 200, 2, "12-11-2021"],
          ["11", "GasStation1", 1, 2, 200, 2, "13-11-2021"],
          ["12", "GasStation2", 1, 2, 50, 2, "18-12-2021"],
          ["13", "Mart1", 1, 2, 200, 2, "01-01-2022"],
          ["14", "Mart2", 1, 2, 200, 2, "12-01-2022"],
          ["15", "GasStation1", 1, 2, 200, 2, "13-01-2022"]
      ]
  });
  }
  return (
    <main className={s.m}>
      <Table state = {props.state}/>
      <Form state = {props.state} addUAction = {props.addUAction} addUDAction = {props.addUDAction}/>
    </main>
  );
}

export default MainApplications;