import './App.css';
import CardBox from './components/CardBox';
import LoginPage from './components/LoginPage';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/swiping" element={<CardBox/>}/>
      </Routes> 
    </div>
  );
}

export default App;
