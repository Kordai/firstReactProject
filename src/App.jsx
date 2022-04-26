import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMoney from './components/Main/MainMoney';
import MainApplications from './components/Main/MainApplications';
import MainPoints from './components/Main/MainPoints';

function App(props) {
 
  return (    
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element = {<Main state={props.store.getState()} />} />
            <Route path="/panelmoney" element = {<MainMoney store = {props.store} />} />
            <Route path="/panelapplications" element = {<MainApplications store = {props.store}/>} />
            <Route path="/panelpoints" element = {<MainPoints />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
