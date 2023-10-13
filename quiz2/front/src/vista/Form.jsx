import React, { useState } from 'react';
import './styles/Form.css';
import { Link } from 'react-router-dom';
import Boton from './components/boton';
import Titulo from './components/titulo';


function Form() {
    const [formData, setFormData] = useState({
      nombre: '',
      edad: '',
      correo: '',
      telefono: '',
      estrato: '',
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        // Limpiar el formulario después de enviar los datos
        setFormData({
          nombre: '',
          edad: '',
          correo: '',
          telefono: '',
          estrato: '',
        });
      }
    };    
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <Titulo Titulo="Registre los datos"/>
        <label>
          Nombre:
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="form-input"
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            value={formData.edad}
            onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
            className="form-input"
          />
        </label>
        <label>
          Telefono:
          <input
            type="number"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className="form-input"
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            value={formData.correo}
            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
            className="form-input"
          />
        </label>
        <label>
          Estrato:
          <input
            type="number"
            value={formData.estrato}
            onChange={(e) => setFormData({ ...formData, estrato: e.target.value })}
            className="form-input"
          />
        </label>
        <Boton type="submit" onClick={handleSubmit} Nombre="Enviar"/>
        <br></br>
        <Link to="/Consultar">
          <Boton Nombre="Ir a tabla consulta"/>
        </Link>
        
      </form>
    );
  }
  
  export default Form;
