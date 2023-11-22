import React from 'react';
import './styles/tabla.css';

function Venta({ ventas }) {
  return (
    <div>
      <h2 className='title'>Tabla de Ventas</h2>
      <table className="usuario-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr key={venta.nombreProducto}>
              <td>{venta.nombreProducto}</td>
              <td>{venta.Unidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Venta;