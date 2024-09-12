import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const userjuego = {
    user: 'juego',
    pass: 'juego123',
  };

  const usercocina = {
    user: 'cocina',
    pass: 'cocina123',
  };

  const [formData, setFormData] = useState({
    user: '',
    pass: '',
  });
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null); // Estado para almacenar el mensaje de error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (
      formData.user === userjuego.user &&
      formData.pass === userjuego.pass
    ) {
      setIsLoggedIn(true);
      navigate('/Buscaminas');
    } else if (
      formData.user === usercocina.user &&
      formData.pass === usercocina.pass
    ) {
      setIsLoggedIn(true);
      navigate('/Cocina');
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="user">Nombre de usuario:</label>
          <input
            type="user"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Contraseña:</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={formData.pass}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Muestra el mensaje de error si existe */}
      {isLoggedIn && <p>Ingreso exitoso.</p>}
    </div>
  );
};

export default Login;