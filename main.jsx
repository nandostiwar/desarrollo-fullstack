import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Juego1 from './Juego1.jsx'
import Juego2 from './Juego2.jsx'
import {createBrowserRouter, RouterProvider } from "react-router-dom";



const routes = [
  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/Juego1",
    element: <Juego1/>
  },
  {
    path: "/Juego2",
    element: <Juego2/>

  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
