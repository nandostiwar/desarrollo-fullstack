import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useSearchParams,
} from 'react-router-dom';
import Login from './Login';
import Administrador from './Administrador';
import Mesero from './Mesero';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Administrador" element={<Administrador />} />
        <Route path="/Mesero" element={<Mesero />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;


