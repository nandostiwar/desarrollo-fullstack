import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cocina from './Cocina.jsx'
import Juego from './Juego.jsx'
import {createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
   path: "/",
   element: <App />,
  },
  {
   path: "/Cocina",
   element: <Cocina />,
  },
  {
   path: "/Juego",
   element: <Juego />,
  }
 
 ];
 
 const router = createBrowserRouter(routes);
 
 ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <RouterProvider router={router}/>
   </React.StrictMode>,
 )