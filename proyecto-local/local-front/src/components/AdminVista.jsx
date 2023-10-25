import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Users from "./Users";
import Productos from "./Productos";
import Ventas from "./Ventas";
import '../styles/AdminVista.css';

function AdminVista({userRol}){
    if(userRol !== 'admin'){
        return <Navigate to="/login"/>
    }

    const [username, setUsername] = useState('');
    const [rol, setRol] = useState('');
    const [nombreProducto, setNombreProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const goTo = useNavigate();
    const [dataUsuarios, setDataUsuarios] = useState([]);
    const [dataProductos, setDataProductos] = useState([]);
    const [dataVentas, setDataVentas] = useState([]);

    async function fetchDataUsuarios(){
        const result = await fetch('http://localhost:4200/v1/local/usuarios');
        const resultJson = await result.json();
        setDataUsuarios(resultJson)
    }

    async function fetchDataProductos(){
        const result = await fetch('http://localhost:4200/v1/local/productos');
        const resultJson = await result.json();
        setDataProductos(resultJson)
    }

    async function fetchdataVentas(){
        const result = await fetch('http://localhost:4200/v1/local/ventas');
        const resultJson = await result.json();
        setDataVentas(resultJson)
    }

    async function handleClickCrear(){
        const result = await fetch('http://localhost:4200/v1/local/crear', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, rol})
        });
    }

    async function handleClickCrearProductos(){
        const result = await fetch('http://localhost:4200/v1/local/crearProducto', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombreProducto, precio})
        });
    }

    async function handleEliminarUsuario(){
        const result = await fetch('http://localhost:4200/v1/local/borrarUsuario', {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username})
        });
    }

    async function handleEliminarProducto(){
        const result = await fetch('http://localhost:4200/v1/local/borrarProducto', {
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
            <div className="container-crear-usuario">
                <h4>Crear usuario</h4>
                <input type="text" placeholder="Nombre usuario" onChange={(e)=>{setUsername(e.target.value)}}/>
                <select onClick={(e)=>{setRol(e.target.value)}}>
                    <option value="admin">Admin</option>
                    <option value="mesero">Mesero</option>
                </select><br />
                <button onClick={handleClickCrear}>Crear usuario</button>
            </div>
            <div className="container-crear-producto">
                <h4>Crear producto</h4>
                <input type="text" placeholder="Nombre del producto" onChange={(e)=>{setNombreProducto(e.target.value)}}/><br/>
                <input type="text" placeholder="Precio del producto" onChange={(e)=>{setPrecio(e.target.value)}}/><br />
                <button onClick={handleClickCrearProductos}>Crear producto</button>
            </div>
            <div className="container-eliminar-usuario">
                <h4>Borrar un usuario</h4>
                <input type="text" placeholder="Eliminar usuario" onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                <button onClick={handleEliminarUsuario}>Borrar usuario</button>
            </div>
            <div className="container-eliminar-producto">
                <h4>Borrar un producto</h4>
                <input type="text" placeholder="nombre del producto a eliminar" onChange={(e)=>{setNombreProducto(e.target.value)}}/><br/>
                <button onClick={handleEliminarProducto}>Borrar producto</button>
            </div>
            <div className="container-buttons">
                <button onClick={fetchDataUsuarios}>Mostrar usuarios</button>
                <button onClick={fetchDataProductos}>Mostrar productos</button>
                <button onClick={fetchdataVentas}>Mostrar ventas</button>
                <button onClick={handleVolver}>Volver</button>
            </div>
            <div className="container-divs-tables">
                <div className="container-table-users">
                    <h3>usuarios</h3>
                    <Users data={dataUsuarios}/>
                </div>
                <div className="container-table-productos">
                    <h3>productos</h3>
                    <Productos dataProductos={dataProductos}/>
                </div>
                <div className="container-ventas">
                    <h3>ventas</h3>
                    <Ventas dataVentas={dataVentas}/>
                </div>
            </div>
            
        </div>
        
    )
}

export default AdminVista;