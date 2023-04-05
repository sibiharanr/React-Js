import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Days/Day9/Home'
import Navbar from './Days/Day9/Navbar'
import Singers from './Days/Day9/Singers'
import Albums from './Days/Day9/Albums'

function App() {
  return (
    <div>
  <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Singers" element={<Singers/>} />
          <Route path="/Albums" element={<Albums/>} />
        </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
