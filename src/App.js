import React from 'react'
import Register from './components/Register'
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
