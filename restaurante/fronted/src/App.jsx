import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import VistaAdmin from './pages/VistaAdministrador'
import VistaMesero from './pages/VistaMesero'

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login callback={setUserRole}/>}/>
        <Route path='/Administrador' element={<VistaAdmin userRole={userRole}/>} />
        <Route path='/Mesero' element={<VistaMesero userRole={userRole}/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
