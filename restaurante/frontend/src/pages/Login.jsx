// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import './styles/Login.css';
import Swal from 'sweetalert2';
import Boton from '../componentes/boton';
import Header from '../componentes/Header';
import Logo from '../componentes/imagenes/Inicio.png';

function Login({ callback }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const goTo = useNavigate(); // Mueve la definición de goTo aquí

  const handleLogin = async () => {
    if (!username && !password) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, complete ambos campos para iniciar sesion.',
      });
      return; // Detener el proceso si ambos campos están vacíos
    }
  
    if (!username) {
      Swal.fire({
        icon: 'error',
        title: 'Campo Usuario vacío',
        text: 'Por favor, ingrese su nombre de usuario.',
      });
      return; // Detener el proceso si el campo de usuario está vacío
    }
  
    if (!password) {
      Swal.fire({
        icon: 'error',
        title: 'Campo Contraseña vacío',
        text: 'Por favor ' + username +',' + ' ingrese su contraseña.',
        html: `Por favor <strong>${username}</strong> ingrese su contraseña para iniciar sesion.`,
      });
      return; // Detener el proceso si el campo de contraseña está vacío
    }

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${password}`, // Enviar la contraseña en el encabezado
        },
      };

      const response = await axios.post(`http://localhost:3000/validacion/validar/${username}`, null, config);
      const serverResponse = response.data;

      console.log('Respuesta del servidor:', serverResponse);

      if (serverResponse.username) {
        // Aquí puedes redirigir al usuario según el rol (serverResponse.role)
        if (serverResponse.role === 'Administrador') {
           // Redirección a la vista de Administrador
          Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            html: `Bienvenido administrador <strong>${username}</strong>!`,
          });
          goTo('/Administrador');
        } else if (serverResponse.role === 'Mesero') {
          // Redirección a la vista de Mesero
          Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            html: `Bienvenido mesero <strong>${username}</strong>!`,
          });
          goTo('/Mesero');
        }
      } 

      // Llama a la función "callback" y pasa el rol
      callback(serverResponse.role);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Usuario o Contraseña incorrectos, por favor revisa bien tus datos.',
      });
    }
  };

  return (
    <div className="container_principal">
      <Header/>
    <div className="login-container">
        <div className="login">
          <img src={Logo} alt="login" />
        </div>
      <h1 style={{ fontSize: '24px', color: '#333', textAlign: 'center' }} >Iniciar Sesión</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Boton type="submit" onClick={handleLogin} Nombre="Iniciar Sesion"/>
      <br></br>
      <Link to="/">
              <Boton Nombre="Regresar"/>
      </Link>
    </div>
    </div>
  );
}

export default Login;
