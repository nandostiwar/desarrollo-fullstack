import React from 'react'
import { Home } from './components/Home'
import { Formulario } from './components/Formulario'
import { useState } from 'react'
import './App.css'
const App = () => {

  const[user, setUser] = useState ([])
  return (
    <div className='App'>
      {
        !user.length>0
        ?<Formulario setUser={setUser} />
        :<Home/>
      }
     
      </div>
  )
}

export default App
