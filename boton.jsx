import React from 'react';

const Boton = ({titulo=pordefecto}) => {
  const handleClick = () => {
    console.log('Se hizo clic en el botón');
  };

  return (
    <button onClick={handleClick}>
      {titulo}
    </button>
  );
};

export default Boton;
