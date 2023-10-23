import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/MeseroView.css';

function MeseroView({userRol}){
    if(userRol !== 'mesero'){
        return <Navigate to="/login"/>
    }
    const [nombreProducto, setNombreProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const goTo = useNavigate();

    async function handleSubmitCreateSale(e){
        e.preventDefault();
        const result = await fetch('http://localhost:4200/v1/tienda/crearVenta', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombreProducto, cantidad})
        });
    }

    function handleVolver(){
        goTo("/login");
    }

    return (
        <div className="container-mesero-view">
            <h4>Crear una venta</h4>
            <form onSubmit={handleSubmitCreateSale}>
                <input type="text" className="btn-txt" placeholder="producto" onChange={(e)=>{setNombreProducto(e.target.value)}}/>
                <input type="text" className="btn-txt" placeholder="cantidad" onChange={(e)=>{setCantidad(e.target.value)}}/><br/>
                <input type="submit" id="crear-venta" value="Crear venta"/>
            </form>
            <button onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default MeseroView;