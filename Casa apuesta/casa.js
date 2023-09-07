let saldo = 0;

document.getElementById("cargarSaldo").addEventListener("click", () => {
    const cantidad = parseInt(prompt("Ingrese la cantidad a cargar:"));
    if (!isNaN(cantidad) && cantidad > 0) {
        saldo += cantidad;
        actualizarSaldo();
    } else {
        alert("Ingrese una cantidad válida.");
    }
});

document.getElementById("apostar").addEventListener("click", () => {
    const tipoApuesta = parseInt(document.getElementById("tipoApuesta").value);
    const apuesta = calcularApuesta(tipoApuesta);

    if (saldo >= apuesta) {
        const resultado = realizarApuesta(tipoApuesta);
        mostrarResultado(resultado);
    } else {
        alert("No tienes saldo suficiente para apostar.");
    }
});

function calcularApuesta(tipoApuesta) {
    switch (tipoApuesta) {
        case 1:
            return 0.25 * saldo;
        case 2:
            return 0.5 * saldo;
        case 3:
            return 0.75 * saldo;
        default:
            return 0;
    }
}

function realizarApuesta(tipoApuesta) {
    const numeroAleatorio = Math.floor(Math.random() * 1001);
    switch (tipoApuesta) {
        case 1:
            if (Math.random() <= 0.25) {
                saldo += 0.25 * saldo;
                return `¡Has ganado ${0.25 * saldo} pesos!`;
            } else {
                saldo -= 0.25 * saldo;
                return `Has perdido. Tu saldo se reduce en ${0.25 * saldo} pesos.`;
            }
        case 2:
            if (Math.random() <= 0.5) {
                saldo += 0.5 * saldo;
                return `¡Has ganado ${0.5 * saldo} pesos!`;
            } else {
                saldo -= 0.5 * saldo;
                return `Has perdido. Tu saldo se reduce en ${0.5 * saldo} pesos.`;
            }
        case 3:
            if (Math.random() <= 0.75) {
                saldo += 0.75 * saldo;
                return `¡Has ganado ${0.75 * saldo} pesos!`;
            } else {
                saldo -= 0.7 * saldo;
                return `Has perdido. Tu saldo se reduce en ${0.7 * saldo} pesos.`;
            }
        default:
            return "";
    }
}

function mostrarResultado(resultado) {
    document.getElementById("resultadoTexto").textContent = resultado;
    actualizarSaldo();
}

function actualizarSaldo() {
    document.getElementById("saldo").textContent = saldo.toFixed(2);
}
