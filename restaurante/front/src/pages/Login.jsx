
import React, { useState } from 'react';
import Boton from '../components/Boton';
import './styles/Login.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = ({ callback }) => {
  const [usuarioname, setUsuarioname] = useState('');
  const [password, setPassword] = useState('');
  const goTo = useNavigate();

  const handleLogin = async () => {
    if (!usuarioname) {
      Swal.fire({
        icon:"error",
        title: 'campos vacios',
        text: 'complete todos los campos.',
      });
      return; //detiene el proceso si no se cumple con los valores
    }
    if (!usuarioname) {
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
        title:  'Ingresa la contraseña,' + usuarioname ,
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

      const response = await axios.post(`http://localhost:4700/v1/restaurante/validation/${usuarioname}`, null, config);
      const serverResponse = response.data;

      console.log('Respuesta del servidor:',serverResponse);

      if (serverResponse.usuarioname) {
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
            html: `Bienvenido mesero <strong>${usuarioname}</strong>!`,
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
      <Header Nombre='PURO SABOR MEXICANO'></Header>
    
    <div className='container_principal'>
      
        <div className='login_container'>
            <h1> INICIO SESION</h1>
        <div className='form-group'>  
            <input
            type="text" 
            placeholder='Nombre de Usuario'
            value={usuarioname}
            onChange={(e) => setUsuarioname(e.target.value)}
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