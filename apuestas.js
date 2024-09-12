let saldo = 0;

function cargarSaldo() {
    const monto = parseFloat(prompt("Ingrese el monto a cargar:"));
    if (!isNaN(monto) && monto > 0) {
        saldo += monto;
        document.getElementById('saldo').textContent = saldo;
    } else {
        alert("Ingrese un monto válido.");
    }
}

function realizarApuesta() {
    const monto = parseFloat(document.getElementById('monto').value);
    const tipoApuesta = parseFloat(document.getElementById('tipoApuesta').value);

    if (!isNaN(monto) && monto > 0 && monto <= saldo) {
        const numeroAleatorio = Math.floor(Math.random() * 1001);

        let pago = 0;

        if (tipoApuesta === 1 && numeroAleatorio >= 0 && numeroAleatorio <= 250) {
            pago = monto * 2;
        } else if (tipoApuesta === 2 && numeroAleatorio >= 0 && numeroAleatorio <= 500) {
            pago = monto;
        } else if (tipoApuesta === 3 && numeroAleatorio >= 0 && numeroAleatorio <= 750) {
            pago = monto * 0.5;
        }

        saldo -= monto;
        document.getElementById('saldo').textContent = saldo;

        const resultado = `Número Aleatorio: ${numeroAleatorio}. `;
        if (pago > 0) {
            saldo += pago;
            document.getElementById('saldo').textContent = saldo;
            document.getElementById('resultado').textContent = `¡Ganaste $${pago}! ${resultado} Saldo actual: $${saldo}`;
        } else {
            document.getElementById('resultado').textContent = `Perdiste. ${resultado} Saldo actual: $${saldo}`;
        }
    } else {
        alert("Ingrese un monto válido y asegúrese de tener suficiente saldo.");
    }
}
