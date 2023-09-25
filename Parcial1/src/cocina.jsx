import React, { useState } from 'react';


const Cocina = () => {
  const [pedido, setPedido] = useState('');
  const [mesa, setMesa] = useState('');
  const [mesero, setMesero] = useState('');
  const [pedidos, setPedidos] = useState([]);
  const [turno, setTurno] = useState(1);
  const [pedidoSeleccionadoIndex, setPedidoSeleccionadoIndex] = useState(-1);
  const [pedidoPendiente, setPedidoPendiente] = useState(false); // Estado para rastrear el estado del pedido

  const handleHacerPedido = () => {
    if (pedido && mesa && mesero) {
      const nuevoPedido = {
        pedido,
        mesa,
        mesero,
        turno,
        entregado: false,
        pendiente: true, // Establece el estado inicial como "Pendiente"
      };
  
      const pedidoExistenteIndex = pedidos.findIndex(
        (pedidoItem) =>
          pedidoItem.pedido === pedido &&
          pedidoItem.mesa === mesa &&
          pedidoItem.mesero === mesero
      );
  
      if (pedidoExistenteIndex !== -1) {
        const nuevosPedidos = [...pedidos];
        nuevosPedidos[pedidoExistenteIndex].entregado = true;
        nuevosPedidos[pedidoExistenteIndex].pendiente = false; // Cambia el estado a "Entregado"
        setPedidos(nuevosPedidos);
        setPedido('');
        setMesa('');
        setMesero('');
        setPedidoSeleccionadoIndex(pedidoExistenteIndex);
        setPedidoPendiente(false); // Cambia el estado del pedido a "Entregado"
      } else {
        setPedidos([...pedidos, nuevoPedido]);
        setTurno(turno + 1);
        setPedido('');
        setMesa('');
        setMesero('');
        setPedidoPendiente(true); // Cambia el estado del pedido a "Pendiente"
      }
    }
  };

  const handlePedidoSeleccionado = (index) => {
    // Cambia el color del pedido seleccionado a verde
    const nuevosPedidos = [...pedidos];
    nuevosPedidos[index].entregado = true;
    setPedidos(nuevosPedidos);
    setPedido('');
    setMesa('');
    setMesero('');
    setPedidoSeleccionadoIndex(index);
  };

  return (
    <div className="cocina-container">
      <div className="formulario-pedido">
        <h2>Hacer Pedido</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Pedido"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Mesa"
            value={mesa}
            onChange={(e) => setMesa(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Mesero"
            value={mesero}
            onChange={(e) => setMesero(e.target.value)}
          />
        </div>
        <button onClick={handleHacerPedido}>Hacer Pedido</button>
      </div>
      {pedidos.map((pedidoItem, index) => (
          <div
              key={pedidoItem.turno}
              className={`pedido-item ${pedidoSeleccionadoIndex === index ? 'entregado' : ''
                  }`}
              onClick={() => handlePedidoSeleccionado(index)}
          >
              <p>Pedido: {pedidoItem.pedido}</p>
              <p>Mesa: {pedidoItem.mesa}</p>
              <p>Mesero: {pedidoItem.mesero}</p>
              <p>Turno: {pedidoItem.turno}</p>
              {pedidoItem.entregado ? (
                  <p>Entregado</p>
              ) : (
                  <button
                      className={pedidoItem.pendiente ? 'pendiente' : 'entregado'}
                      onClick={(e) => {
                          e.stopPropagation();
                          handlePedidoEntregado(index);
                      }}
                  >
                      {pedidoItem.pendiente ? 'Pendiente' : 'Entregado'}
                  </button>
              )}
          </div>
      ))}

    </div>
  );
};

export default Cocina;
