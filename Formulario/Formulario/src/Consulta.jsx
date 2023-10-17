import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Consulta.css';

function Consulta() {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/v1/boton/datos');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <h2>Consulta de Datos</h2>
      <button onClick={toggleTable}>
        {showTable ? 'Ocultar Datos' : 'Mostrar Datos'}
      </button>
      <div>
      <button onClick={() => navigate('/Formulario')}>Regresar</button>
      </div>

      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Estrato</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.edad}</td>
                <td>{item.telefono}</td>
                <td>{item.correo}</td>
                <td>{item.estrato}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Consulta;
