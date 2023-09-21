import { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Login({callback}){
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const goTo = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        if(username === 'juego' && pass === 'juego123'){
            callback("userGame");
            goTo("/juego");
        }else if(username === 'cocina' && pass === 'cocina123'){
            callback("userKitchen");
            goTo("/cocina");
        }
    }
    return (
        <form onSubmit={handleSubmit}> 
            <h1>Aplicacion</h1>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
            <h1>Contraseña</h1>
            <input type="password" onChange={(e)=>{setPass(e.target.value)}}/><br />
            <input id="btnIngresar" type="submit" value="Ingresar"/>
        </form>
    )
}

export default Login;