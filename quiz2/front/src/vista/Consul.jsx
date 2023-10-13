import React, { useState, useEffect } from 'react';
import './styles/Consultar.css'; // Importa tu archivo de estilos CSS
import Titulo from './components/titulo';
import { Link } from 'react-router-dom';
import Boton from './components/boton';

function Consultar() {
  const [data, setData] = useState([]);
  const [orderBy, setOrderBy] = useState(null);

  useEffect(() => {
    // Realizar una solicitud GET al servidor para obtener los datos
    fetch('http://localhost:5000/api/get-data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const sortBy = (column) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => a[column] - b[column]);
    setData(sortedData);
    setOrderBy(column);
  };

  return (
    <div>
      <Titulo Titulo="Tabla Consultar"/>
      <p className='texto'>Por favor dar clic en un boton para ordenar de manera ascendente</p>
      <button className='boton1' onClick={() => sortBy('edad')}>Ordenar por Edad</button>  
      <button className='boton2' onClick={() => sortBy('estrato')}>Ordenar por Estrato</button>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad {orderBy === 'edad' ? '↑' : ''}</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Estrato {orderBy === 'estrato' ? '↑' : ''}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.edad}</td>
              <td>{item.correo}</td>
              <td>{item.telefono}</td>
              <td>{item.estrato}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/Formulario">
          <Boton Nombre="Regresar al formulario"/>
        </Link>
    </div>
  );
}

export default Consultar;

