// Función para obtener números aleatorios entre 1 y 20
function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  // Función para comprobar si hay 2 números iguales en la lista
  function comprobarGanador(lista) {
    const contador = {};
    for (const numero of lista) {
      contador[numero] = (contador[numero] || 0) + 1;
      if (contador[numero] >= 2) {
        return true; // Se encontraron al menos 2 números iguales
      }
    }
    return false; // No se encontraron 2 números iguales
  }
  
  // Obtener elementos del DOM
  const inputNumeros = document.getElementById("numeros");
  const btnJugar = document.getElementById("jugar");
  const resultado = document.getElementById("resultado");
  
  // Agregar evento al botón de jugar
  btnJugar.addEventListener('click', function() {
    const numerosUsuario = inputNumeros.value.split(',').map(numero => parseInt(numero.trim()));
    
    // Verificar que haya exactamente 5 números únicos
    if (numerosUsuario.length !== 5 || new Set(numerosUsuario).size !== 5) {
      resultado.textContent = "Por favor, ingresa 5 números únicos separados por comas.";
    } else {
      const numerosAleatorios = [];
      for (let i = 0; i < 10; i++) {
        numerosAleatorios.push(obtenerNumeroAleatorio());
      }
      resultado.textContent = `Números generados: ${numerosAleatorios.join(", ")}`;
      
      if (comprobarGanador(numerosAleatorios)) {
        resultado.textContent += "\n¡Felicidades! Has ganado.";
      } else {
        resultado.textContent += "\nLo siento, no has ganado. Intenta de nuevo.";
      }
    }
  });
  
  
  