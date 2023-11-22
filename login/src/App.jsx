import React from 'react'
import { Home } from './components/Home'
import { Formulario } from './components/Formulario'
import { useState } from 'react'
import './App.css'
const App = () => {

  const[usuario, setUsuario] = useState ([])
  return (
    <div className='App'>
      {
        !usuario.length>0
        ?<Formulario setUsuario={setUsuario} />
        :<Home/>
      }
     
      </div>
  )
}

export default App
