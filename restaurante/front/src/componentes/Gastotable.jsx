import React from 'react'

function GastoTable ({ gasto }) {

  return (
    <div>
      <h2 className='title'>Tabla de Gasto</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del gasto</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {gasto.map((gasto) => (
            <tr key={gasto.gastoName}>
              <td>{gasto.id}</td>
              <td>{gasto.gastoName}</td>
              <td>${gasto.price}</td>
              <td>
                  <button className="delete-button" onClick={() => onDeleteGasto(gasto.gastoName)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
//     <div>
//     <h2 className='title'>Tabla de Gastos</h2>
//     <table className="user-table">
//       <thead>
//         <tr>
//           <th>Nombre</th>
//           <th>Monto</th>
//         </tr>
//       </thead>
//       <tbody>
//         {gasto.map((sell) => (
//           <tr key={sell.nombreProducto}>
//             <td>{sell.nombreProducto}</td>
//             <td>${sell.Unidad}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
  );

}

export default GastoTable