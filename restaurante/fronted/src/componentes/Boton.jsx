import React from 'react';
import './stylesC/styles_comp.css';

const Boton = ({ Nombre, onClick }) => {
    return (
      <button onClick={onClick} className="button">
        {Nombre}
      </button>
    );
  };
  
  export default Boton;