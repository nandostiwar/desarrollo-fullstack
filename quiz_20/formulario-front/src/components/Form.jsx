import { useState } from "react";

function Form(){
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [estrato, setEstrato] = useState('');

    async function sendData(e){
        e.preventDefault();
        await fetch('http://localhost:4000/v1/form/enviar',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombre, edad, telefono, correo, estrato})
        }); 
    }
    return (
        <form onSubmit={sendData}>
            <label htmlFor="inputName">Nombre: </label>
            <input type="text" id="inputName" placeholder="nombre" onChange={(e)=>setNombre(e.target.value)}/> <br />

            <label htmlFor="inputAge">Edad: </label>
            <input type="text" id="inputAge" placeholder="edad" onChange={(e)=>setEdad(e.target.value)}/> <br />

            <label htmlFor="inputTel">Telefono: </label>
            <input type="text" id="inputTel" placeholder="telefono" onChange={(e)=>setTelefono(e.target.value)}/> <br />

            <label htmlFor="inputEmail">Correo: </label>
            <input type="text" id="inputEmail" placeholder="correo" onChange={(e)=>setCorreo(e.target.value)}/> <br />

            <label htmlFor="inputEstrato">Estrato: </label>
            <input type="text" id="inputEstrato" placeholder="estrato" onChange={(e)=>setEstrato(e.target.value)}/> <br />

            <input type="submit" value="Ingresar" />
        </form>
    )
}

export default Form;