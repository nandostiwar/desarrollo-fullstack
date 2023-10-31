import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Mesero.css';


function Mesero() {
  const [nombre, setNombre] = useState('');
  const [cantidad, setcantidad] = useState('');
  const navigate = useNavigate();

  const CambiarNombre = (e) => {
    setNombre(e.target.value);
  };

  const CambiarCantidad = (e) => {
    setcantidad(e.target.value);
  };

  const RegistrarPedido = () => {

    const pedido = { nombre, cantidad };

    fetch('http://localhost:4000/v1/boton/procesar-formulario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    })
      .then((response) => response.json())
      .then((data) => {
        setNombre('');
        setcantidad('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='Mesero'>
      <div>
        <label>Nombre del pedido:</label>
        <input type="text" className="nombre-input" value={nombre} onChange={CambiarNombre} />
      </div>
      <div>
        <label>Cantidad:</label>
        <input type="number"  className="cantidad-input" value={cantidad} onChange={CambiarCantidad} />
      </div>
        <button className="crear-venta-button" onClick={RegistrarPedido}>Crear Venta</button>
      <div> 
        <button className="logout-button" onClick={() => navigate('/Login')}>Cerrar Sesion</button>
      </div>
    </div>
    
  );
}

export default Mesero;
