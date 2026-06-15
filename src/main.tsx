import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/variables.css'
import './i18n'
import Home from './pages/Home'
import Franchise from './pages/Franchise'
import Invest from './pages/Invest'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)