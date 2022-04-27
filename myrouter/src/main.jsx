import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './Header'
import App from './App'
import About from './About'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" index element={<App value="Hello" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
