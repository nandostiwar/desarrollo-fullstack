import React, { useState } from 'react';
import './Cocina.css'
import { Link } from 'react-router-dom';
import Boton from './Boton'

const Cocina = () => {
  const [pedidos, setPedidos] = useState([]);
  const [mesa, setMesa] = useState('');
  const [mesero, setMesero] = useState('');
  const [pedido, setPedido] = useState('');
  const [turno, setTurno] = useState(1);

  const agregarPedido = () => {
    if (mesa && mesero && pedido) {
      const nuevoPedido = {
        turno,
        mesa,
        mesero,
        pedido,
        estado: 'pendiente',
      };

      setPedidos([...pedidos, nuevoPedido]);
      setTurno(turno + 1);
      setMesa('');
      setMesero('');
      setPedido('');
    }
  };

  const cambiarEstadoPedido = (index) => {
    const nuevosPedidos = [...pedidos];
    nuevosPedidos[index].estado = 'entregado';
    setPedidos(nuevosPedidos);
  };

  return (
    <div className='Cocina'>
      <h2>Cocina</h2>
      <div>
        <label htmlFor="mesa">Mesa:</label>
        <input
          type="text"
          id="mesa"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
        /> <br />
        <label htmlFor="mesero">Mesero:</label>
        <input
          type="text"
          id="mesero"
          value={mesero}
          onChange={(e) => setMesero(e.target.value)}
        /> <br />
        <label htmlFor="pedido">Pedido:</label>
        <input
          type="text"
          id="pedido"
          value={pedido}
          onChange={(e) => setPedido(e.target.value)}
        /> <br />
        <label>Turno: {turno}</label>
      </div>
      <button onClick={agregarPedido}>Hacer Pedido</button>
      <div className="pedidos">
        {pedidos.map((pedido, index) => (
          <div key={index} className="tarjeta-pedido">
            <p>Turno: {pedido.turno}</p>
            <p>Mesa: {pedido.mesa}</p>
            <p>Mesero: {pedido.mesero}</p>
            <p>Pedido: {pedido.pedido}</p>
            <p>Estado: {pedido.estado}</p>
            {pedido.estado === 'pendiente' && (
              <button onClick={() => cambiarEstadoPedido(index)}>Entregado</button>
            )}
          </div>
        ))}
        <Link to="/"> <Boton titulo='Volver' />  </Link>
      </div>
    </div>
  );
};

export default Cocina;