import React from 'react';
import './stylescomp/styles.css'

const Boton = ({ Nombre, onClick }) => {
  return (
    <button onClick={onClick} className="button">
        {Nombre}
    </button>
  )
}

export default Boton;