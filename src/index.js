import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>

  </BrowserRouter>
  
);

reportWebVitals();
