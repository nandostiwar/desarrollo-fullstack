const saldo = document.getElementById("saldo");
const texto = document.getElementById("texto");
const entrada = document.getElementById("entrada");
const valorApuesta = document.getElementById("valorApuesta");
const tipoApuesta = document.getElementById("tipoApuesta");
const btnCargar = document.getElementById("cargar");
const btnApostar = document.getElementById("apostar");
const mensajeInsuficiente = document.getElementById("insuficiente");

btnCargar.addEventListener("click", cargarSaldo);
btnApostar.addEventListener("click", apostar);

function generarNumeroAleatorio(rango) {
    return Math.floor(Math.random() * (rango + 1));
}

let contar = 0;

function cargarSaldo() {
    contar += parseInt(entrada.value);
    mostrarSaldo();
    entrada.value = "";  // Limpiar el campo después de cargar
}

function mostrarSaldo() {
    const msm = "Su Saldo: " + contar;
    saldo.innerText = msm;
}

function apostar() {
    const apuesta = parseInt(valorApuesta.value);
    const rangoSeleccionado = parseInt(tipoApuesta.value);

    let numeroAleatorio;
    let ganancia;

    switch (rangoSeleccionado) {
        case 25:
            numeroAleatorio = generarNumeroAleatorio(250);
            ganancia = apuesta * 2;
            break;
        case 50:
            numeroAleatorio = generarNumeroAleatorio(500);
            ganancia = apuesta * 2;
            break;
        case 75:
            numeroAleatorio = generarNumeroAleatorio(750);
            ganancia = apuesta * 0.5;
            break;
    }

    if (apuesta > contar) {
        mensajeInsuficiente.innerText = "Saldo insuficiente para esta apuesta.";
        return;
    } else {
        mensajeInsuficiente.innerText = "";  // Limpiar el mensaje si hay saldo suficiente
    }

    if (numeroAleatorio <= rangoSeleccionado) {
        contar += ganancia;
        texto.innerText = `¡Ganaste! El número fue ${numeroAleatorio}. Ganaste ${ganancia}.`;
    } else {
        contar -= apuesta;
        texto.innerText = `Perdiste. El número fue ${numeroAleatorio}.`;
    }

    mostrarSaldo();
}
