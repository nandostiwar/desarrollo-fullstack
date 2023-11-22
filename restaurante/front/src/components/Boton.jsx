import React from 'react';
import './styles/styles.css'

const Boton = ({ Nombre, onClick }) => {
  return (
    <button onClick={onClick} className="button">
        {Nombre}
    </button>
  )
}

export default Boton;