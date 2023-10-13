import React from 'react';
import '../styles/Components.css'; 

const Boton = ({ Nombre, onClick }) => {
  return (
    <button onClick={onClick} className="my-button">
      {Nombre}
    </button>
  );
};

export default Boton;