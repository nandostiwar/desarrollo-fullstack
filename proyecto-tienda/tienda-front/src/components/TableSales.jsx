function TableSales({dataSales}){
    return (
        <table id="table-sales">
            <thead>
                <tr>
                    <th>nombre del producto</th>
                    <th>cantidad</th>
                </tr>
            </thead>
            <tbody>
                {dataSales.map((sale)=>(
                    <tr key={sale.nombreProducto}>
                        <td>{sale.nombreProducto}</td>
                        <td>{sale.cantidad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableSales;