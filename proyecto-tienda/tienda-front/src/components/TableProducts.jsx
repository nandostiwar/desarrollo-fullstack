function TableProducts({dataProducts}){
    
    return (
        <table id="table-products">
            <thead>
                <tr>
                    <th>nombre del producto</th>
                    <th>precio</th>
                </tr>
            </thead>
            <tbody>
                {dataProducts.map((product)=>(
                    <tr key={product.nombreProducto}>
                        <td>{product.nombreProducto}</td>
                        <td>{product.precio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableProducts;