import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import MainMoney from './components/Main/MainMoney';
import MainApplicationsContainer from './components/Main/MainApplicationsContainer';
import MainPoints from './components/Main/MainPoints';
import MainUsersContainer from './components/Main/MainUsersContainer';
import UserProfile from './components/Main/Sections/Section4/Profile/UserProfile';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Header />      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/panelmoney" element={<MainMoney />} />
          <Route path="/panelapplications" element={<MainApplicationsContainer />} />
          <Route path="/panelpoints" element={<MainPoints />} />
          <Route path="/panelusers" element={<MainUsersContainer />} />
          <Route path="/panelusers/userprofile" element={<UserProfile />} />
        </Routes>   
    </div>
  );
}

export default App;
