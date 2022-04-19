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
            <Route path="/panelcontrol" element={<Main state={props.state} />} />
            <Route path="/panelmoney" element={<MainMoney state={props.state} />} />
            <Route path="/panelapplications" element={<MainApplications state={props.state} />} />
            <Route path="/panelpoints" element={<MainPoints state={props.state} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
