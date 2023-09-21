import '../styles/CardMina.css';
import Message from './Message';
import { useState } from 'react';

function CardMina({numero, bomba=false}){
    const [perdidas, setPerdidas] = useState(0);
    const [ganancias, setGanancias] = useState(0);
    function mostrarBomba(e){
        if(bomba){
            e.target.id = "red";
            setPerdidas(perdidas+1);
        }else{
            e.target.id = "green";
            setGanancias(ganancias+1);
        }
        
    }

    function validarPerdidas(){
        if(perdidas === 2){
            return true;
        }
        return false;
    }

    function validarGanancias(){
        if(ganancias === 3){
            return true;
        }
        return false;
    }

    return (
        <div className='mina' id="blue" onClick={mostrarBomba}>
            <h5>{numero}</h5>
            
            {(validarPerdidas()) ? <Message message={"has perdido"}/>: ""}
            {(validarGanancias()) ? <Message message={"has ganado"}/>: ""}
        </div>
    )
}

export default CardMina;