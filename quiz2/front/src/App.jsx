import React from 'react';
import './App.css'
import Form from './vista/Form';
import Consultar from './vista/Consul';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/Formulario' />} />
        <Route path='/Formulario' element={<Form />} />
        <Route path='/Consultar' element={<Consultar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

