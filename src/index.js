import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import SignUp from './Pages/SignUp';
import LogOut from './Pages/LogOut';
import Navbar from './Pages/Navbar';
import Error from './Pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/:userName' element={<Navbar><Home /></Navbar>} />
      <Route path='/About' element={<Navbar><About /></Navbar>} />
      <Route path='/login' element={<Navbar><Login /> </Navbar>} />
      <Route path='/Signup' element={<Navbar><SignUp /> </Navbar>} />
      <Route path='/logout' element={<Navbar><LogOut /> </Navbar>} />
      <Route path='*' element={<Error />} />

    </Routes>

  </BrowserRouter>

);

reportWebVitals();
