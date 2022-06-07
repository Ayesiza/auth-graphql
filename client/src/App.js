import React from 'react';
import {  Route, Routes, } from "react-router-dom";
import './App.css'
//import { Container } from 'semantic-ui-react'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
        </Route>
      </Routes>

    </div>
    
  );
}

export default App;
