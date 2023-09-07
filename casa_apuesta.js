var saldo;

function mostrarModosJuego() {
    saldo = document.getElementById("saldo").value;

    if (saldo === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un saldo válido.";
        return;
    }

    document.getElementById("modosJuego").style.display = "block";
    document.getElementById("numeroAleatorio").innerHTML = "";
}

function iniciarJuego(modo) {
    var numeroAleatorio = Math.floor(Math.random() * 1001);

    var resultado = "";

    if (modo === 1) {
        if (numeroAleatorio <= 250) {
            resultado = "¡Ganaste!";
        } else {
            resultado = "Perdiste.";
        }
    } else if (modo === 2) {
        if (numeroAleatorio <= 500) {
            resultado = "¡Ganaste!";
        } else {
            resultado = "Perdiste.";
        }
    } else if (modo === 3) {
        if (numeroAleatorio <= 750) {
            resultado = "¡Ganaste!";
        } else {
            resultado = "Perdiste.";
        }
    }

    document.getElementById("resultado").innerHTML = `Saldo: $${saldo} - Modo ${modo} - ${resultado}`;
    document.getElementById("numeroAleatorio").innerHTML = `Número aleatorio: ${numeroAleatorio}`;
    document.getElementById("modosJuego").style.display = "none";
}


