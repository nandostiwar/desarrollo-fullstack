import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Game from './components/Game'
import Kitchen from './components/Kitchen'

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Login callback={setUser}/>}></Route>
        <Route path='/juego' element={<Game user={user}/>}></Route>
        <Route path='/cocina' element={<Kitchen user={user}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
