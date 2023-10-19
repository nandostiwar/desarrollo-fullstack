import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/AdminView.css'

function AdminView({userRol}){
    if(userRol !== 'admin'){
        return <Navigate to="/login"/>
    }

    const [username, setUsername] = useState('');
    const [rol, setRol] = useState('');
    const [nombreProducto, setNombreProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const goTo = useNavigate();

    async function handleClickCreate(){
        const result = await fetch('http://localhost:4200/v1/tienda/crear', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, rol})
        });
    }

    async function handleClickCreateProduct(){
        const result = await fetch('http://localhost:4200/v1/tienda/crearProducto', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombreProducto, precio})
        });
    }

    async function handleDeleteUser(){
        const result = await fetch('http://localhost:4200/v1/tienda/borrarUsuario', {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username})
        });
    }

    async function handleDeleteProduct(){
        const result = await fetch('http://localhost:4200/v1/tienda/borrarProducto', {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombreProducto})
        });
    }

    function handleVolver(){
        goTo("/login");
    }

    return (
        <div className="container-general">
            <div className="container-create-user">
                <h4>Crear usuario</h4>
                <input type="text" placeholder="nombre de usuario a crear" onChange={(e)=>{setUsername(e.target.value)}}/>
                <select onClick={(e)=>{setRol(e.target.value)}}>
                    <option value="admin">Admin</option>
                    <option value="mesero">Mesero</option>
                </select><br />
                <button onClick={handleClickCreate}>Crear usuario</button>
            </div>
            <div className="container-create-product">
                <h4>Crear producto</h4>
                <input type="text" placeholder="nombre del producto" onChange={(e)=>{setNombreProducto(e.target.value)}}/><br/>
                <input type="text" placeholder="precio del producto" onChange={(e)=>{setPrecio(e.target.value)}}/><br />
                <button onClick={handleClickCreateProduct}>Crear producto</button>
            </div>
            <div className="container-delete-user">
                <h4>Borrar un usuario</h4>
                <input type="text" placeholder="nombre del usuario a eliminar" onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                <button onClick={handleDeleteUser}>Borrar este usuario</button>
            </div>
            <div className="container-delete-product">
                <h4>Borrar un producto</h4>
                <input type="text" placeholder="nombre del producto a eliminar" onChange={(e)=>{setNombreProducto(e.target.value)}}/><br/>
                <button onClick={handleDeleteProduct}>Borrar este usuario</button>
            </div>
            <div className="container-buttons">
                <button>mostrar usuarios</button>
                <button>mostrar productos</button>
                <button>mostrar ventas</button>
                <button onClick={handleVolver}>volver</button>
            </div>
        </div>
        
    )
}

export default AdminView;