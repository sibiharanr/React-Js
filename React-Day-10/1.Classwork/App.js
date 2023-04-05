import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Days/Day10/Navbar'
import Home from './Days/Day10/Home'
import About from './Days/Day10/About'
import Contact from './Days/Day10/Contact'
import Destination from './Days/Day10/Destination'
import RegistrationForm from './Days/Day10/RegistrationForm'


function App() {
  return (
    <div>
      <center>
        <BrowserRouter>
        <Navbar/>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Destination" element={<Destination/>} />
            <Route path="/RegistrationForm" element={<RegistrationForm/>} />
           </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App
