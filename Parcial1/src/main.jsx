import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Cocina from './cocina.jsx'
import Juego from './Componentes/Algo_juego.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/Juego",
    element: <Juego/>,
  },
  {
    path: "/Cocina",
    element: <Cocina/>,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
