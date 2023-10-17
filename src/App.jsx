import React, { useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:5000';

function App() {
  const [users, setUser] = useState({ nombre: '', edad: '', telefono: '', correo: '', estado: '' });

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_URL}/formulario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const handleConsultar = async (sortType) => {
    try {
      const response = await fetch(`${API_URL}/consulta/${sortType}`);
      const data = await response.json();
      console.log('Usuarios ordenados por', sortType, data);
    } catch (error) {
      console.error('Error al consultar:', error);
    }
  };

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Nombre" onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} />
        <input type="number" placeholder="Edad" onChange={(e) => setFormData({ ...formData, edad: e.target.value })} />
        <input type="tel" placeholder="Teléfono" onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} />
        <input type="email" placeholder="Correo" onChange={(e) => setFormData({ ...formData, correo: e.target.value })} />
        <input type="text" placeholder="Estado" onChange={(e) => setFormData({ ...formData, estado: e.target.value })} />
        <button onClick={handleSubmit}>Ingresar</button>
      </div>
      <div>
        <button onClick={() => handleConsultar('edad')}>Consulta por Edad</button>
        <button onClick={() => handleConsultar('estrato')}>Consulta por Estrato</button>
      </div>
    </div>
  );
}

export default App;
