import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Form from './components/Form'
import AdminVista from './components/AdminVista'
import MeseroVista from './components/MeseroVista'

function App() {
  const [userRol, setUserRol] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}></Route>
        <Route path='/login' element={<Form callback={setUserRol}/>}></Route>
        <Route path='/admin' element={<AdminVista userRol={userRol}/>}></Route>
        <Route path='/mesero' element={<MeseroVista userRol={userRol}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
