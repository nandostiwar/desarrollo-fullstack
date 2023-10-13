import React from 'react';
import '../styles/Components.css'; 

const Titulo = ({ Titulo }) => {
  return (
    <h1 className="my-title">
      {Titulo}
    </h1>   
  );
};

export default Titulo;