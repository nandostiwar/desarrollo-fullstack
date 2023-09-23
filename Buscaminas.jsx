import React, { useState, useEffect } from 'react';
import Cuadros from './cuadros';
import Cuadros1 from './cuadros1';
import Cuadros2 from './cuadros2';
import Cuadros3 from './cuadros3';
import Cuadros4 from './cuadros4';
import Boton from '../../boton';
import { Link } from 'react-router-dom';

const Buscaminas = () => {
  const [numerosElegidos, setNumerosElegidos] = useState([]);
  const [numerosIncorrectos, setNumerosIncorrectos] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [minas, setMinas] = useState(Array(5).fill(false));
  const [numerosRestantes, setNumerosRestantes] = useState(3);

  useEffect(() => {
    reiniciarJuego();
  }, []);

  const reiniciarJuego = () => {
    setMensaje('');
    setNumerosElegidos([]);
    setNumerosIncorrectos([]);
    setMinas(Array(5).fill(false));
    const numerosAleatorios = [];
    while (numerosAleatorios.length < 2) {
      const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio);
      }
    }
    setNumerosIncorrectos(numerosAleatorios);
    setNumerosRestantes(3);
  };

  useEffect(() => {
    if (numerosRestantes === 0) {
      setMensaje('¡Ganaste!');
    }
  }, [numerosRestantes]);

  const handleClick = (numero) => {
    if (minas[numero - 1]) {
      setMensaje('Perdiste, elegiste un número con una mina.');
    } else if (numerosIncorrectos.includes(numero)) {
      setMensaje('Perdiste, elegiste un número incorrecto.');
    } else if (!numerosElegidos.includes(numero) && numerosRestantes > 0) {
      setNumerosElegidos([...numerosElegidos, numero]);
      setNumerosRestantes((prev) => prev - 1);
    }
  };

  const toggleMina = (numero) => {
    const newMinas = [...minas];
    newMinas[numero - 1] = !newMinas[numero - 1];
    setMinas(newMinas);
  };

  const cuadrosComponentes = [
    Cuadros,
    Cuadros1,
    Cuadros2,
    Cuadros3,
    Cuadros4,
  ];

  return (
    <div>
      <h1>Buscaminas</h1>
      <div>
        <p>NO TE MUERAS:</p>
        <p>Números restantes por adivinar: {numerosRestantes}</p>
        {cuadrosComponentes.map((CuadrosComponent, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`cuadro ${numerosElegidos.includes(index + 1) ? 'seleccionado' : ''} ${minas[index] ? 'mina' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        {mensaje && <p>{mensaje}</p>}
        {numerosIncorrectos.length > 0 && (
          <p>Números incorrectos: {numerosIncorrectos.join(', ')}</p>
        )}
      </div>
      <Boton
        titulo={'VOLVER A JUGAR'}
        onClick={reiniciarJuego} // Llama a reiniciarJuego al hacer clic
      />
      <Link to="/">
        <Boton titulo={'REGRESAR'} />
      </Link>
    </div>
  );
};

export default Buscaminas;








