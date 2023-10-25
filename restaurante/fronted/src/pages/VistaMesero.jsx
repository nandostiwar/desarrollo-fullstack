import React, { useEffect, useState } from 'react';
import './styles/Formulario.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header1 from '../componentes/Header1';

function VistaMesero({ userRole }) {
  const navigate = useNavigate();

  function Volver(){
    navigate("/");
}

  useEffect(() => {
    // Verificar si el usuario tiene permiso para acceder a esta vista
    if (userRole !== 'Mesero') {
      // Redirigir al usuario a la página de inicio de sesión (ruta index)
      navigate('/');
    }
  }, [userRole, navigate]);

  if (userRole !== 'Mesero') {
    // Evitar que se renderice el contenido de VistaAdmin si se redirige
    return null;
  }
  const [nombreProducto, setNombreProducto] = useState('');
  const [Unidad, setUnidad] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validaciones
    if (nombreProducto.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo "Nombre del Producto" es obligatorio.',
      });
      return;
    }
  
    if (Unidad <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo "Unidad" debe ser un número mayor que 0.',
      });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/createSell', {
        nombreProducto,
        Unidad,
      });
  
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Venta creada con éxito',
        });
        // Restablecer los campos del formulario
        setNombreProducto('');
        setUnidad(0);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al crear la venta',
        });
      }
    } catch (error) {
      console.error('Error al enviar la solicitud', error);
    }
  };

  return (
    <>
    <Header1 titulo_principal="Bienvenido a la plataforma, Mesero" />
    <div className="form-container">
      <h2>Crear una venta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Producto:</label>
          <input
            type="text"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Unidad:</label>
          <input
            type="number"
            value={Unidad}
            onChange={(e) => setUnidad(e.target.value)}
          />
        </div>
        
        <button type="submit" className="submit-button">Crear Venta</button>
      </form>
      <button onClick={Volver} className="return-button">Cerrar sesion</button>
    </div>
    </>
  );
}
export default VistaMesero;
