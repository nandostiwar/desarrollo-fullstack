import React from 'react';
import './stylesC/tabla.css';

function SellTable({ sells }) {
  return (
    <div>
      <h2 className='title'>Tabla de Ventas</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {sells.map((sell) => (
            <tr key={sell.nombreProducto}>
              <td>{sell.nombreProducto}</td>
              <td>${sell.Unidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SellTable;