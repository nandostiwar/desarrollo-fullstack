
const txtNumero = document.getElementById("numeroJS")

const btnConteo = document.getElementById("botonJS")

const txtSalida = document.getElementById("salidaJS")

btnConteo.addEventListener('click', presionado)

function presionado(){
    console.log("presiono botón")
    if (txtNumero.value % 3 == 0){
        txtSalida.innerText = "SI es Multiplo de Tres"
        console.log("SISISISIS")
    }else{
        txtSalida.innerText = "NO es Multiplo de Tres"
        console.log("ONONONONONN")
    }    
}

