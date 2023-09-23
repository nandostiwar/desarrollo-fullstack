import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Buscaminas from './assets/componentes/Buscaminas.jsx';
import Cocina from './assets/componentes/cocina.jsx';
import App from './App';

const routes = [
  {
    path: "/",
    element: <App />,
  },
 
  {
    path: "/Buscaminas",
    element: <Buscaminas />,
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
