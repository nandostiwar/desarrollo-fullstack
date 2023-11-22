
import React, { useState } from 'react';
import Boton from '../componentes/Boton';
import './styles/Login.css';
import Header from '../componentes/Header';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = ({ callback }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const goTo = useNavigate();

  const handleLogin = async () => {
    if (!username) {
      Swal.fire({
        icon:"error",
        title: 'campos vacios',
        text: 'complete todos los campos.',
      });
      return; //detiene el proceso si no se cumple con los valores
    }
    if (!username) {
      Swal.fire({
        icon:"error",
        title: 'Ingresa el nombre de usuario',
        text: '',
      });
      return;
    }
    if (!password) {
      Swal.fire({
        icon:"error",
        title:  'Ingresa la contraseña,' + username ,
        text: '',
      });
      return;
    }
    try {
      const config = {
        headers: {
          'Authorization' : `Bearer ${password}`,
        },
      };

      const response = await axios.post(`http://localhost:4700/v1/restaurante/validation/${username}`, null, config);
      const serverResponse = response.data;

      console.log('Respuesta del servidor:',serverResponse);

      if (serverResponse.username) {
        if(serverResponse.role === 'Administrador') {
          Swal.fire({
            icon:'success',
            title:'¡Inicio exitoso!',
          });
          goTo('/Admin');
        }else if (serverResponse.role === 'Mesero') {
          //vista mesero
          Swal.fire({
            icon: 'success',
            html: `Bienvenido mesero <strong>${username}</strong>!`,
          });
          goTo('/Mesero');
        }
      }
      callback(serverResponse.role);
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Usuario o contraseña incorrectos',
      });
    }
  

  };


  return (
    <div>
      <Header Nombre='Restaurente LA SUPERIOR'></Header>
    
    <div className='container_principal'>
      
        <div className='login_container'>
            <h1> Iniciar sesion</h1>
        <div className='form-group'>  
            <input
            type="text" 
            placeholder='Nombre de usuario'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        
        </div>
        <div className='form-group'>
            <input
            type="password" 
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

        </div>
      
        <Boton className="submit-button" type="submit" onClick={handleLogin} Nombre="Iniciar sesion"></Boton>
        </div>
    
    </div>
    </div>
  )
}

export default Login