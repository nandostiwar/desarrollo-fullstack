const btnConteo = document.getElementById("botonJS")

const txtSalida = document.getElementById("salidaJS")

btnConteo.addEventListener('click', presionado)

let conteoGeneral = 0

function presionado(){
    console.log("presiono")
    conteoGeneral+=1
    txtSalida.innerText = conteoGeneral
}