import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainMoney from './components/Main/MainMoney';
import MainApplicationsContainer from './components/Main/MainApplicationsContainer';
import MainPoints from './components/Main/MainPoints';
import MainUsersContainer from './components/Main/MainUsersContainer';
import UserProfile from './components/Main/Sections/Section4/Profile/UserProfile';
import Login from './components/Login/Login';

function App(props) {
  const navigation = useNavigate();
  return (
    <div className="App">
      <Nav />
      <Header />      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/panelmoney" element={<MainMoney />} />
          <Route path="/panelapplications" element={<MainApplicationsContainer navigation = {navigation} />} />
          <Route path="/panelpoints" element={<MainPoints />} />
          <Route path="/panelusers" element={<MainUsersContainer navigation = {navigation}/>} />
          <Route path="/panelusers/userprofile/:userID" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>   
    </div>
  );
}

export default App;
