import './Algo_juego.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Algoritmo_juego = () => {
  const navigate = useNavigate();
  const [botones, setBotones] = useState(generarBotonesAleatorios());
  const [resultado, setResultado] = useState(null);
  const [seleccionesCorrectas, setSeleccionesCorrectas] = useState([]);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    if (seleccionesCorrectas.length === botonesSinTrampa.length) {
      // Si todas las selecciones son correctas, muestra "Ganaste"
      setResultado('Ganaste!!, Bien hecho');
      setJuegoTerminado(true);
    }
  }, [seleccionesCorrectas]);

  const botonesSinTrampa = botones
    .filter((boton) => boton.trampa === false)
    .map((boton) => boton.numero);

function generarBotonesAleatorios() {
  const botonesAleatorios = [];
  const trampasAleatorias = shuffleArray([true, false, false, true, false]); // Mezcla las trampas de forma aleatoria

  for (let i = 0; i < 5; i++) {
    const numero = i + 1;
    const trampa = trampasAleatorias[i];
    botonesAleatorios.push({ numero, trampa, color: 'white', disabled: false });
  }

  return botonesAleatorios;
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const handleBotonClick = (numero, trampa) => {
    if (!juegoTerminado) {
      const nuevosBotones = botones.map((boton) => {
        if (boton.numero === numero) {
          if (trampa) {
            setResultado('Perdiste');
            setJuegoTerminado(true);
            return { ...boton, color: 'red', disabled: true, className: 'boton-trampa' }; // Agrega la clase 'boton-trampa' para botones con trampa
          } else {
            setSeleccionesCorrectas((prevSelecciones) => [...prevSelecciones, numero]);
            return { ...boton, color: 'green', disabled: true };
          }
        }
        return boton;
      });
  
      setBotones(nuevosBotones);
    }
  };

  const handleReiniciar = () => {
    const nuevosBotones = generarBotonesAleatorios();
    setBotones(nuevosBotones);
    setResultado(null);
    setSeleccionesCorrectas([]);
    setJuegoTerminado(false);
  };

  const handleRegresar = () => {
    navigate('/');
  };

  return (
    <div className="juego-container">
      <h2>Juego</h2>
      <div className="botones-container">
        {botones.map((boton) => (
          <button
            key={boton.numero}
            className={boton.color === 'green' ? 'green' : boton.color === 'red' ? 'red' : ''}
            onClick={() => handleBotonClick(boton.numero, boton.trampa)}
            disabled={boton.disabled}
          >
            {boton.numero}
          </button>
        ))}
      </div>
      {resultado && <p>{resultado}</p>}
      <div className="acciones">
        <button onClick={handleReiniciar}>Reiniciar</button>
        <button onClick={handleRegresar}>Regresar al Login</button>
      </div>
    </div>
  );
};

export default Algoritmo_juego;
