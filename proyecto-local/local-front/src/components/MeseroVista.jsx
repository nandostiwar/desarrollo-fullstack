import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/MeseroVista.css';

function MeseroVista({userRol}){
    if(userRol !== 'mesero'){
        return <Navigate to="/login"/>
    }
    const [nombreProducto, setNombreProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const goTo = useNavigate();

    async function handleSubmitCrearVenta(e){
        e.preventDefault();
        const result = await fetch('http://localhost:4200/v1/local/crearVenta', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombreProducto, cantidad})
        });
    }

    function handleVolver(){
        goTo("/login");
    }

    return (
        <div className="container-mesero-vista">
            <h4>Crear  venta</h4>
            <form onSubmit={handleSubmitCrearVenta}>
                <input type="text" className="btn-txt" placeholder="Producto" onChange={(e)=>{setNombreProducto(e.target.value)}}/>
                <input type="text" className="btn-txt" placeholder="Cantidad" onChange={(e)=>{setCantidad(e.target.value)}}/><br/>
                <input type="submit" id="crear-venta" value="Crear venta"/>
            </form>
            <button onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default MeseroVista;