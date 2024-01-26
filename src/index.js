import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import SignUp from './Pages/SignUp';
import LogOut from './Pages/LogOut';
import Navbar from './Pages/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/logout' element={<LogOut/>}/>

    </Routes>

  </BrowserRouter>
  
);

reportWebVitals();
