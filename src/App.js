import React from 'react'
import './App.css';
import CardBox from './components/CardBox';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/swiping" element={<CardBox/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes> 
    </div>
  );
}

export default App;
