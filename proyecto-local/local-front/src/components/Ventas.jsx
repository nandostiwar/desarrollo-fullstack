function Ventas({dataVentas}){
    return (
        <table id="ventas">
            <thead>
                <tr>
                    <th>nombre del producto</th>
                    <th>cantidad</th>
                </tr>
            </thead>
            <tbody>
                {dataVentas.map((sale)=>(
                    <tr key={sale.nombreProducto}>
                        <td>{sale.nombreProducto}</td>
                        <td>{sale.cantidad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Ventas;