import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Botonn from './Botonn.jsx'
import Boton from './Boton.jsx'
import Boton1 from './Boton1.jsx'
import Boton2 from './Boton2.jsx'
import User from './User.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User />
    <Boton />
    <Botonn />
    <Boton1 />
    <Boton2 />
  </React.StrictMode>,
)
