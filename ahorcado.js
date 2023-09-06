
const txtEntrada = document.getElementById("entradaJS")

const btnEncriptar = document.getElementById("botonJS")

const txtSalida = document.getElementById("salidaJS")

btnEncriptar.addEventListener('click', presionado)

function imprimirPalabra(palabra){
    let texto = ""
    for (let i=0; i<palabra.length; i++){
        texto+=palabra[i]
        texto+=' '
    }
    return texto
}

function presionado(){
    txtEntrada.style.visibility = "hidden"
    btnEncriptar.style.visibility = "hidden"
    document.getElementById("textoTitulo").style.visibility = "hidden"
    txtSalida.innerText = imprimirPalabra(txtEntrada)
}

