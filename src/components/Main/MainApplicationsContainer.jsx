import React from 'react';
import MainApplications from './MainApplications';
import { uAActionCreator, uADActionCreator } from '../../Redux/applicationsReducer';

const MainApplicationsContainer = (props) => {

  let state = props.store.getState().applications;

  const addUAction = (name, value) => {
    props.store.dispatch(uAActionCreator(name, value));
  }
  const addUDAction = () => {
    props.store.dispatch(uADActionCreator());
  }
  return <MainApplications state={state} addUAction={addUAction} addUDAction={addUDAction} />
    
}

export default MainApplicationsContainer;