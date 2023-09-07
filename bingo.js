let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let numero4 = document.querySelector("#numero4");
let numero5 = document.querySelector("#numero5");

let txtNumbers = document.querySelector("#txtNumbers");
let txtGanaste = document.querySelector("#txtGanaste");

let btnJugar = document.querySelector("#btnJugar");

let numero = Math.floor(Math.random() * (20 - 1) * 1);

let arrayNum = [];

btnJugar.addEventListener('click', ()=>{
    let number1 = parseInt(numero1.value);
    let number2 = parseInt(numero2.value);
    let number3 = parseInt(numero3.value);
    let number4 = parseInt(numero4.value);
    let number5 = parseInt(numero5.value);
    
    let arrayNumUser = [number1, number2, number3, number4, number5]

    while(arrayNum.length < 5){
        let numeroPush = Math.floor(Math.random() * (20 - 2) * 1);
        if(!arrayNum.includes(numeroPush)){
            arrayNum.push(numeroPush);
        }
    }
    let contador = 0;
    
    let hasDuplicates = array => new Set(array).size < array.length;
    
    if(hasDuplicates(arrayNumUser)){
        txtNumbers.innerText = "Tiene repetidos";
    }
    console.log(hasDuplicates(arrayNumUser));

    arrayNum.forEach(element => {
        for(let i=0; i<arrayNumUser.length; i++){
            if(element === arrayNumUser[i]){
                contador+=1;
            }
        }
    });

    console.log(arrayNum);    
    if(contador>=2){
        txtGanaste.innerText = "ganaste"
    }
    txtNumbers.innerText = arrayNum.join(" ");
    
})