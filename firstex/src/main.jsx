import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Heaader from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Heaader />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
