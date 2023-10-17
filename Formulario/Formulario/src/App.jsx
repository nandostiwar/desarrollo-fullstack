import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useSearchParams,
} from 'react-router-dom';
import Formulario from './Formulario';
import Consulta from './Consulta';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/Consulta" element={<Consulta />} />
        <Route path="/" element={<Navigate to="/Formulario" />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;

