function TableProductos({dataProductos}){
    
    return (
        <table id="table-productos">
            <thead>
                <tr>
                    <th>Nombre Del producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {dataProductos.map((product)=>(
                    <tr key={product.nombreProducto}>
                        <td>{product.nombreProducto}</td>
                        <td>{product.precio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableProductos;