import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './Main.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter basename="/Sekai">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
