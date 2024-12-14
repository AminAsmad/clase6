import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './page/Inicio'
import Nosotros from './page/Nosotros'
import Servicios from './page/Servicios'
import Contacto from './page/Contacto'
import Productos from './page/Productos'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>


    <Routes>

      <Route path='/'element={<Inicio/>}/>
      <Route path='/inicio'element={<Inicio/>}/>
      <Route path='/nosotros'element={<Nosotros/>}/>
      <Route path='/servicios'element={<Servicios/>}/>
      <Route path='/contacto'element={<Contacto/>}/>
      <Route path='/productos'element={<Productos/>}/>
      <Route path='*'element={<Inicio/>}/>

    </Routes>
    <Footer/>


    </BrowserRouter>
  )
}

export default App
