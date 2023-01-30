import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar/NavBar'


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </div>
  )
}

export default App
