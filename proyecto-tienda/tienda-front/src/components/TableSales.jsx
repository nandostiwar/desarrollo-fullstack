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
                    <tr key={sale.nombre_producto}>
                        <td>{sale.nombre_producto}</td>
                        <td>{sale.cantidad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableSales;