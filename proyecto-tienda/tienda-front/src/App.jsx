import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Form from './components/Form'
import AdminView from './components/AdminView'
import MeseroView from './components/MeseroView'

function App() {
  const [userRol, setUserRol] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}></Route>
        <Route path='/login' element={<Form callback={setUserRol}/>}></Route>
        <Route path='/admin' element={<AdminView userRol={userRol}/>}></Route>
        <Route path='/mesero' element={<MeseroView userRol={userRol}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
