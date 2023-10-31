import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Administrador.css';

function Administrador() {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('user');
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [productosRegistrados, setProductosRegistrados] = useState([]);
  const [mostrarProductos, setMostrarProductos] = useState(false);
  const [ventasRegistrados, setVentasRegistrados] = useState([]);
  const [mostrarVentas, setMostrarVentas] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/v1/boton/obtener-usuarios')
      .then((response) => response.json())
      .then((data) => {
        setUsuariosRegistrados(data.usuarios);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/v1/boton/obtener-productos')
      .then((response) => response.json())
      .then((data) => {
        setProductosRegistrados(data.productos);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/v1/boton/obtener-ventas')
      .then((response) => response.json())
      .then((data) => {
        setVentasRegistrados(data.ventas);
      })
      .catch((error) => console.error(error));
  }, []);

  const CambiarNombre = (e) => {
    setNombre(e.target.value);
  };

  const CambiarTipoNombre = (e) => {
    setTipo(e.target.value);
  };

  const CambiarNombreProducto = (e) => {
    setNombreProducto(e.target.value);
  };

  const CambiarPrecioProducto = (e) => {
    setPrecioProducto(e.target.value);
  };

  const AgregarUsuario = () => {
    if (nombre.trim() === '') {
      return;
    }
    const usuario = { nombre, tipo };

    fetch('http://localhost:4000/v1/boton/agregar-usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .then((data) => {
        setNombre('');
        setTipo('user');
      })
      .catch((error) => console.error(error));
  };

  const AgregarProducto = () => {
    if (nombreProducto.trim() === '' || isNaN(parseFloat(precioProducto))) {
      return;
    }

    const producto = { nombre: nombreProducto, precio: parseFloat(precioProducto) };

    fetch('http://localhost:4000/v1/boton/agregar-producto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    })
      .then((response) => response.json())
      .then((data) => {
        setNombreProducto('');
        setPrecioProducto('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Administrador">
      <h1>Administrador</h1>
      <div>
        <label>Nombre del usuario:</label>
        <input type="text" className="nombre-input" value={nombre} onChange={CambiarNombre} />
      </div>
      <div>
        <label>Tipo de Usuario:</label>
        <select className="tipo-select" value={tipo} onChange={CambiarTipoNombre}>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <button className="agregar-usuario-button" onClick={AgregarUsuario}>Agregar Usuario</button>
      <div>
        <label>Nombre del producto:</label>
        <input type="text" className="nombre-producto-input" value={nombreProducto} onChange={CambiarNombreProducto} />
      </div>
      <div>
        <label>Precio del producto:</label>
        <input type="text" className="precio-producto-input" value={precioProducto} onChange={CambiarPrecioProducto} />
      </div>
      <div>
        <button className="agregar-producto-button" onClick={AgregarProducto}>Agregar Producto</button>
      </div>
      <div>
        <button className="logout-button" onClick={() => navigate('/Login')}>Cerrar Sesión</button>
      </div>
      <div>
        <button className="mostrar-usuarios-button" onClick={() => setMostrarUsuarios(!mostrarUsuarios)}>Mostrar Usuarios</button>
      </div>
      {mostrarUsuarios && (
        <div>
          <ul>
            {usuariosRegistrados.map((usuario, index) => (
              <ul key={index}>{usuario.nombre} ({usuario.tipo})</ul>
            ))}
          </ul>
        </div>
      )}
      <div>
        <button className="mostrar-usuarios-button" onClick={() => setMostrarProductos(!mostrarProductos)}>Mostrar Productos</button>
      </div>
      {mostrarProductos && (
        <div>
          <ul>
            {productosRegistrados.map((productos, index) => (
              <ul key={index}>{productos.nombre} ({productos.precio})</ul>
            ))}
          </ul>
        </div>
      )}
      <div>
        <button className="mostrar-usuarios-button" onClick={() => setMostrarVentas(!mostrarVentas)}>Mostrar Ventas</button>
      </div>
      {mostrarVentas && (
        <div>
          <ul>
            {ventasRegistrados.map((ventas, index) => (
              <ul key={index}>{ventas.nombre} ({ventas.cantidad})</ul>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Administrador;



