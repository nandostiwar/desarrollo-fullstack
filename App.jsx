import { useState } from 'react'
import './App.css'
import Boton from './Boton'
import { useNavigate, useSearchParams } from 'react-router-dom'

function App() {
  
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
    user:'',
    pass:'',
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[error, setError] = useState(null);

  const handleChange = (e) =>{
    const {name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if(
      formData.user === userjuego.user &&
      formData.pass === userjuego.pass
    ) {
      setIsLoggedIn(true);
      navigate('/Juego');
    } else if (
      formData.user === usercocina.user &&
      formData.pass === usercocina.pass
    ) {
      setIsLoggedIn(true);
      navigate('/Cocina');
    } else {
      setError('Credenciales incorrectas. Intente de nuevo.');
    }
  };




  return (





    <div className="app">
    <h2>Iniciar sesión</h2>
    <form>
      <div className="container">
        <label htmlFor="user">Nombre de usuario:</label>
        <input className='input'
          type="user"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        /> <br />
        <label htmlFor="pass">Contraseña:</label>
        <input className='input'
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


export default App
