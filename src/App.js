import logo from './logo.svg';
import './App.css';
// import Form from './Components/Form/Form';
// import Function from './Components/Funtion/Functions';
import Function from './SignIn/Function/Function';
import Profil from "./HomePage/Profil/Profil"
import { useState } from 'react';
import Site from './HomePage/Site/Site';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./Slider/Slider"

function App() {
  const localUser = localStorage.getItem("loginUser")
  return (
    <div className="App">
      {localUser ? <Site></Site> : <Function></Function>}
      {/* <Slider></Slider> */}
      {/* <Profil></Profil> */}
      {/* <Site></Site> */}
      {/* <BrowserRouter>
      <Routes>
         <Route path='/' element={<Function></Function>}></Route>
         {localUser && <Route path='/site' element={<Site></Site>}></Route>}
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
