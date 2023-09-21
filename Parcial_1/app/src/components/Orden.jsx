import '../styles/Orden.css';
import { useState } from 'react';

function Orden({turno, pedido, mesa, mesero}){
    const [pendiente, setPendiente] = useState(true);

    function validate(e){
        if(pendiente===true){
            setPendiente(false);
        }else if(pendiente===false){
            setPendiente(true);
        }
    }
    return (
        <div className="orden">
            <h2>Turno {turno}</h2>
            <h2>Pedido {pedido}</h2>
            <h2>Mesa {mesa}</h2>
            <h2>Mesero {mesero}</h2>

            {pendiente ? (<button onClick={validate}>PENDIENTE</button>):(<button onClick={validate}>ENTREGADO</button>)}
        </div>
    )
}

export default Orden;