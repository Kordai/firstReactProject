import React from 'react';
import Header from './components/Header/Header';

import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
