import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import User1 from './componentes/User1.jsx';
import User2 from './componentes/User2.jsx';

import {createBrowserRouter, RouterProvider } from "react-router-dom";


const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/componentes/Login",
    element: <login />,
  },
  {
    path: "/componentes/User1",
    element: <User1/>
  },
  {
    path: "/componentes/User2",
    element: <User2/>

  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
