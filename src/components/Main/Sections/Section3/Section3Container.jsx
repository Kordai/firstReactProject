import React from 'react';
import Section3 from './Section3'
import { uPActionCreator, uPDActionCreator } from '../../../../Redux/section3Reducer';

const Section3Container = (props) => {

  let state = props.store.getState().section3;
  
  const addUAction = (name, value) =>{
    props.store.dispatch(uPActionCreator(name, value));
  }
  const addUDAction = () =>{
    props.store.dispatch(uPDActionCreator());
  }
  
  return <Section3 state={state} addUAction = {addUAction} addUDAction = {addUDAction}/>   
}

export default Section3Container;