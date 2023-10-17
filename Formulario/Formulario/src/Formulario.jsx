import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulario.css';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    telefono: '',
    correo: '',
    estrato: '',
  });

  const [objBtn, setObjBtn] = useState({});
  
  const ManejoCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const ManejoEnvio = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  
    fetch('http://localhost:4000/v1/boton/procesar-formulario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Respuesta del servidor:', data);
        // Puedes realizar otras acciones con la respuesta del servidor aquí
      })
      .catch((error) => {
        console.error('Error al enviar datos:', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/v1/boton/datos');
        const result = await response.json();
        setObjBtn(result);
      }catch(error){
        console.error('Error al obtener datos:', error);
      };
    };

    fetchData();
  }, []);

  const navigate = useNavigate();



  return (
  <div> 
    <form onSubmit={ManejoEnvio}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={ManejoCambio}
        />
      </div>
      <div>
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          name="edad"
          value={formData.edad}
          onChange={ManejoCambio}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={ManejoCambio}
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={ManejoCambio}
        />
      </div>
      <div>
        <label htmlFor="estrato">Estrato:</label>
        <input
          type="number"
          id="estrato"
          name="estrato"
          value={formData.estrato}
          onChange={ManejoCambio}
        />
      </div>
      <div>
        <button type="submit">Ingresar Información</button>
      </div>
      <div>
        <button onClick={() => navigate('/Consulta')}>Ir a Consulta</button>
    </div>
    </form>
    
  </div>
  
    
  );
}

export default Formulario;


