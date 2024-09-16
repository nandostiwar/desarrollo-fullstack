import React from 'react'

function Saldo ({ saldo}) {

  return (
    <div>
      <h2 className='title'>SALDO</h2>
      <table className="usuario-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del saldo</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {saldo.map((saldo) => (
            <tr key={saldo.saldoName}>
              <td>{saldo.id}</td>
              <td>{saldo.saldoName}</td>
              <td>${saldo.precio}</td>
              <td>
                  <button className="delete-button" onClick={() => onDeleteSaldo(saldo.saldoName)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
//     <div>
//     <h2 className='title'>Tabla de Gasts</h2>
//     <table className="usuario-table">
//       <thead>
//         <tr>
//           <th>Nombre</th>
//           <th>Monto</th>
//         </tr>
//       </thead>
//       <tbody>
//         {gast.map((venta) => (
//           <tr key={venta.nombreProducto}>
//             <td>{venta.nombreProducto}</td>
//             <td>${venta.Unidad}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
  );

}

export default Saldo