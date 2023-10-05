import React from 'react';

const ButtonCounter = ({ label, count, updateCount, onSave }) => {
  const handleIncrement = () => {
    updateCount(label, count + 1); // Llama a la función de actualización
  };

  return (
    <div>
      <button onClick={handleIncrement}>
        {label}: {count}
      </button>
      {/* Eliminamos el botón de guardar individual */}
    </div>
  );
};

export default ButtonCounter;


