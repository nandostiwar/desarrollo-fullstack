import React, { useState } from 'react';
import ButtonCounter from './componentes/ButtonCounter';

function App() {
  const initialCounters = {
    'Botón 1': 0,
    'Botón 2': 0,
    'Botón 3': 0,
  };

  const [counters, setCounters] = useState(initialCounters);
  const [message, setMessage] = useState('');

  const handleSaveAllCounts = async () => {
    try {
      // Realiza una solicitud POST al servidor Express para guardar todos los contadores en un archivo JSON
      const response = await fetch('http://localhost:5000/api/saveAllCounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(counters),
      });

      if (response.ok) {
        setMessage('Contadores guardados en el servidor.');
      } else {
        setMessage('Error al guardar los contadores en el servidor.');
      }
    } catch (error) {
      console.error('Error al enviar solicitud al servidor:', error);
    }
  };

  const updateCount = (label, newCount) => {
    // Actualiza el contador correspondiente en el estado
    setCounters((prevCounters) => ({
      ...prevCounters,
      [label]: newCount,
    }));
  };

  return (
    <div>
      <h1>Contadores de Clics</h1>
      <ButtonCounter
        label="Botón 1"
        count={counters['Botón 1']}
        updateCount={updateCount}
      />
      <ButtonCounter
        label="Botón 2"
        count={counters['Botón 2']}
        updateCount={updateCount}
      />
      <ButtonCounter
        label="Botón 3"
        count={counters['Botón 3']}
        updateCount={updateCount}
      />
      <button onClick={handleSaveAllCounts}>Guardar todos los contadores</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

