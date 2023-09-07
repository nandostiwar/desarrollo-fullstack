let saldoUsuario = document.querySelector("#saldo");
let saldoCargar = document.querySelector("#saldoCargar");
let saldoApostar = document.querySelector("#saldoApostar");

let btnCargar = document.querySelector("#cargar");
let btnApostar = document.querySelector("#apostar");

let t = document.querySelector("#t");
let numAleatorio = document.querySelector("#numeroAleatorio");

let numeroMaquina = 0;

btnCargar.addEventListener('click', ()=>{
    saldoUsuario.value = parseInt(saldoUsuario.value) + parseInt(saldoCargar.value);
});

btnApostar.addEventListener('click', ()=>{
    // console.log(parseInt(saldoApostar.value));
    if(parseInt(saldoApostar.value) > parseInt(saldoUsuario.value)){
        numAleatorio.innerText = "Saldo insuficiente";
    }else{
        if(t.value == "t1"){
            numeroMaquina = Math.floor(Math.random() * (1000 - 1) * 1);
            if(numeroMaquina >= 0 && numeroMaquina<=250){
                saldoUsuario.value = parseInt(saldoUsuario.value) + parseInt(saldoApostar.value) * 2;
                //numAleatorio.innerText = numeroMaquina;
            }
        }
        if(t.value == "t2"){
            numeroMaquina = Math.floor(Math.random() * (1000 - 1) * 1);
            if(numeroMaquina >= 0 && numeroMaquina<=500){
                saldoUsuario.value = parseInt(saldoUsuario.value) + parseInt(saldoApostar.value) * 2;
                //numAleatorio.innerText = numeroMaquina;
            }
        }
        if(t.value == "t3"){
            numeroMaquina = Math.floor(Math.random() * (1000 - 1) * 1);
            if(numeroMaquina >= 0 && numeroMaquina<=750){
                saldoUsuario.value = parseInt(saldoUsuario.value) + parseInt(saldoApostar.value) / 2;
                //numAleatorio.innerText = numeroMaquina;
            }
        }
        numAleatorio.innerText = numeroMaquina;
    }
    

});