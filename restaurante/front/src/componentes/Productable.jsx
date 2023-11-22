import React from 'react'

function Productable({ products, onDeleteProduct }) {

  return (
     <div>
      <h2 className='title'>Tabla de Productos</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productName}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>${product.price}</td>
              <td>
                  <button className="delete-button" onClick={() => onDeleteProduct(product.productName)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Productable