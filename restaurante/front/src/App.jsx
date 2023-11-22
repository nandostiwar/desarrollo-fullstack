import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Mesero from './pages/Mesero'
import Admin from './pages/Admin'

function App() {
  const [usuarioRole, setUsuarioRole] = useState(null);

  return (
<BrowserRouter>

      <Routes>
        <Route index element={<Login callback={setUsuarioRole}/>}/>
        <Route path='/Admin' element={<Admin usuarioRole={usuarioRole}/>} />
        <Route path='/Mesero' element={<Mesero usuarioRole={usuarioRole}/>} />
      </Routes>
    {/* <Routes>
      <Route path='/' element={<Navigate to= "/Login"/>}/>
      <Route path='/Login' element ={<Login/>}/>
      <Route path='/Admin' element ={<Admin/>}/>
      <Route path='/Mesero' element ={<Mesero/>}/>
    </Routes> */}
</BrowserRouter>


    // <BrowserRouter>
    //  <Routes>
    //   <Route index element={<Login callback={setUserRole}/>}/>
    //   <Route path='/Administrador' element={<Admin userRole={userRole}/>}></Route>
    //   <Route path='/Mesero' element={<Mesero userRole={userRole}/>}></Route>
    //  </Routes>
    // </BrowserRouter>

//    <BrowserRouter>
//      <Routes>
 //        <Route path='/' element ={<Login/>}/>
 //        <Route path='/Admin' element ={<Admin/>}/>
 //        <Route path='/Mesero' element ={<Mesero/>}/>
 //      </Routes>
//    </BrowserRouter> 


  )
}

export default App
//<Route path='/' element={<Navigate to= "/Login"/>}/>

