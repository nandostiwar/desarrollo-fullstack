import React, { useEffect, useState } from 'react';
import './styles/Formulario.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header1 from '../componentes/Header1';

function VistaMesero({ userRole }) {
  const navigate = useNavigate();

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
  const [nombreproducto, setnombreproducto] = useState('');
  const [unidad, setunidad] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validaciones
    if (nombreproducto.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo "Nombre del Producto" es obligatorio.',
      });
      return;
    }
  
    if (unidad <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo "unidad" debe ser un número mayor que 0.',
      });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/verventas/createSell', {
        nombreproducto,
        unidad,
      });
  
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Venta creada con éxito',
        });
        // Restablecer los campos del formulario
        setnombreproducto('');
        setunidad(0);
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
    <Header1 titulo_principal="Bienvenido a la plataforma, Mesero" titulo="Cerrar Sesion" enlace="/Login"/>
    <div className="form-container">
      <h2>Crear una venta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Producto:</label>
          <input
            type="text"
            value={nombreproducto}
            onChange={(e) => setnombreproducto(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>unidad:</label>
          <input
            type="number"
            value={unidad}
            onChange={(e) => setunidad(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Crear Venta</button>
      </form>
    </div>
    </>
  );
}
export default VistaMesero;
