import { useState } from 'react'
import Home from '../pages/home'
import Signin from '../pages/signin'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/in" element={ <Signin /> } />
    </Routes>
  )
}

export default App