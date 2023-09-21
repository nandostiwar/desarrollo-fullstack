import { Navigate } from "react-router-dom";
import BtnHome from './BtnHome';
import Orden from './Orden';
import { useState } from "react";

function Kitchen({user}){
    if(user!=='userKitchen' || !user){
        return <Navigate to="/"/>
    }
    const [turno, setTurno] = useState(0);
    const [pedido, setPedido] = useState("");
    const [mesa, setMesa] = useState("");
    const [mesero, setMesero] = useState("");
    const [pendiente, setPendiente] = useState("");
    const [pedidos, setPedidos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setTurno(turno+1);
        pedidos.push({turno: turno, pedido: pedido, mesa: mesa, mesero: mesero})  
    }
    return (
        <div>
            <h1>KITCHEN</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pedido">PEDIDO</label>
                <input type="text" id="pedido" onChange={(e)=>{setPedido(e.target.value)}}/><br></br>

                <label htmlFor="mesa">MESA</label>
                <input type="text" id="mesa" onChange={(e)=>{setMesa(e.target.value)}}/><br></br>

                <label htmlFor="mesero">MESERO</label>
                <input type="text" id="mesero" onChange={(e)=>{setMesero(e.target.value)}}/><br />

                <input type="submit" value="HACER PEDIDO"/>
                

                {/* <Orden /> */}
            </form>
            {pedidos.map((orden)=>{
                    return <Orden turno={orden.turno} pedido={orden.pedido} mesa={orden.mesa} mesero={orden.mesero}/>
                })}
            <BtnHome />
        </div>
    )
}

export default Kitchen;