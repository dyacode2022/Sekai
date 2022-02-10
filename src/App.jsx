import { useState } from 'react'
import Home from './pages/home'
import Signin from './pages/signin'
import List from './pages/list'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/in" element={ <Signin /> } />
      <Route path="/list" element={ <List /> } />
    </Routes>
  )
}

export default App