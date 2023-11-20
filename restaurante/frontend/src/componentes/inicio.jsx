import React from "react";
import './stylesC/inicio.css';


const Inicio = ({titulo, descripcion, inicia_sesion, imagen}) => {
    return (
        <>
            <section className="horoscope">
                <h2>{titulo}</h2>
                <img src={imagen}/>
                <p>{descripcion}</p>
                <p><b>{inicia_sesion}</b></p>
            </section>
        </>
    )
  }
  
export default Inicio;