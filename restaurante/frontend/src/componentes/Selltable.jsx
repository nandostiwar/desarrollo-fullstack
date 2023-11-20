import React from 'react';
import './stylesC/tabla.css';

function SellTable({ sells }) {
  return (
    <div>
      <h2 className='title'>Tabla de Ventas</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
          {sells.map((sell) => (
            <tr key={sell.id}>
              <td>{sell.id}</td>
              <td>{sell.nombreproducto}</td>
              <td>{sell.unidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SellTable;