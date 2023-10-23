import { useState } from "react";
import '../styles/Form.css';
import { useNavigate } from "react-router-dom";

function Form({callback}){
    const [username, setUsername] = useState('');
    const goTo = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        const result = await fetch(`http://localhost:4200/v1/tienda/validar/${username}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"}
        });

        const resultJson = await result.json();
        callback(resultJson.rol);
        
        if(resultJson.rol==='admin'){
            goTo('/admin');
        }else if(resultJson.rol==='mesero'){
            goTo('/mesero');
        }
        
    }
    return (
        <div className="container-form">
            <h4>Ingrese su nombre de usuario</h4>
            <form onSubmit={handleSubmit}>
                <input id="input-name" type="text" placeholder="nombre de usuario" onChange={(e)=>setUsername(e.target.value)}/><br />
                <input id="btn-submit" type="submit" value="Ingresar"/>
            </form>
        </div>
        
    )
}
export default Form;