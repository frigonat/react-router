import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'

import Navbar from './components/Navbar.jsx'
import './index.css'
import App from './App.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'
import Rutas from './router/Rutas.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <div className="container mt-4">
      <Rutas />
    </div>
  </BrowserRouter>
)
