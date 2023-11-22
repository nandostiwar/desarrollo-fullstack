import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Mesero from './pages/Mesero'
import Admin from './pages/Admin'

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
<BrowserRouter>

      <Routes>
        <Route index element={<Login callback={setUserRole}/>}/>
        <Route path='/Admin' element={<Admin userRole={userRole}/>} />
        <Route path='/Mesero' element={<Mesero userRole={userRole}/>} />
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

