import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormBusiness from './Components/FormBusiness/FormBusiness'
import FormPerson from './Components/FormPerson/FormPerson'
import LandingPage from './Components/Landing/LandingPage'
import NavBar from './Components/Navbar/NavBar'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/form-person' element={<FormPerson />}/>
        <Route path='/form-business' element={<FormBusiness />}/>
      </Routes>

    </div>
  )
}

export default App
