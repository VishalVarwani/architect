import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import Header from './components/header';
import Contacts from './components/contact';
import Services from './components/services';

export default function App() {
  return (
    <div>
      <Routes>
        
      <Route path='/header' element={<Header/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/services' element={<Services/>}/>

    <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}
