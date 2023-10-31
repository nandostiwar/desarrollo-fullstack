import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const ManejarEnvio = (e) => {
    e.preventDefault();

    if (username === 'admin') {
      navigate('/Administrador');
    }else if (username === 'mesero') {
      navigate('/Mesero');
    }
     else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className='login-container h2'>
      <h2>Iniciar sesión</h2>
      <form onSubmit={ManejarEnvio}>
        <div className='login-container'>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
