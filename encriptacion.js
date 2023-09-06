
const txtEntrada = document.getElementById("entradaJS")

const btnEncriptar = document.getElementById("botonJS")

const txtSalida = document.getElementById("salidaJS")

btnEncriptar.addEventListener('click', presionado)

function presionado(){
    let texto = ""

    for (let i = 0; i<txtEntrada.value.length ; i++){
        switch (txtEntrada.value[i]){
            case 'a': texto+='x'; break
            case 'e': texto+='y'; break
            case 'i': texto+='z'; break
            case 'o': texto+='w'; break
            case 'u': texto+='k'; break
            case ' ': break
            default: texto+=txtEntrada.value[i]
        }
    }
    txtSalida.innerText = texto
}

