import React from 'react'

function Producto({ productos, onDeleteProducto }) {

  return (
     <div>
      <h2 className='title'>Tabla de Producto</h2>
      <table className="usuario-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.productoName}>
              <td>{producto.id}</td>
              <td>{producto.productoName}</td>
              <td>${producto.precio}</td>
              <td>
                  <button className="delete-button" onClick={() => onDeleteProducto(producto.productoName)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Producto