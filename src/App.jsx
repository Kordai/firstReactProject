import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Main state={props.state} />
      </div>
    </BrowserRouter>
  );
}

export default App;
