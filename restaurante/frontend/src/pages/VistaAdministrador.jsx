import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header1 from '../componentes/Header1';
import UserTable from '../componentes/Usertable';
import Boton from '../componentes/boton';
import ProductTable from '../componentes/Productable';
import SellTable from '../componentes/Selltable';
import './styles/VistAdmin.css';

function VistaAdmin({ userRole }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Verificar si el usuario tiene permiso para acceder a esta vista
    if (userRole !== 'Administrador') {
      // Redirigir al usuario a la página de inicio de sesión (ruta index)
      navigate('/');
    }
  }, [userRole, navigate]);

  if (userRole !== 'Administrador') {
    // Evitar que se renderice el contenido de VistaAdmin si se redirige
    return null;
  }
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([]);
  const [sells, setSells] = useState([]);
  const [showProductTable, setShowProductTable] = useState(false);
  const [showUsertable, setShowUserTable] = useState(true);
  const [showSellTable, setShowSellTable] = useState(false);
  const [createProductHandler, setCreateProductHandler] = useState(null);
  const [createUserHandler, setCreateUserHandler] = useState(null);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de usuarios
    axios.get('http://localhost:3000/verusuarios/users') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const usersData = response.data;
        setUsers(usersData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de usuarios', error);
      });
  }, []);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de productos
    axios.get('http://localhost:3000/verproductos/products') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const productsData = response.data;
        setProducts(productsData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de productos', error);
      });
  }, []);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de ventas
    axios.get('http://localhost:3000/verventas/sells') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const sellsData = response.data;
        setSells(sellsData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de ventas', error);
      });
  }, []);

  const hideProducTable = () => {
    setShowProductTable(!showProductTable);
    setShowUserTable(false);
    setShowSellTable(false);
  };

  const hideUserTable = () => {
    setShowProductTable(false);
    setShowUserTable(true);
    setShowSellTable(false);
  };

  const hideSellTable = () => {
    setShowProductTable(false);
    setShowUserTable(false);
    setShowSellTable(!showSellTable);
  };

  return (
    <div>
      <Header1 titulo_principal="Bienvenido a la plataforma, Administrador" titulo="Cerrar Sesion" enlace="/Login"/>
      <div>
        {showUsertable && (
          <div className='boton-container'>
            <Boton onClick={() => createUserHandler && createUserHandler()} Nombre="Crear usuario" />
            <Boton onClick={hideProducTable} Nombre="Ver tabla productos" />
            <Boton onClick={hideSellTable} Nombre="Ver tabla ventas" />
          </div>
        )}
        {showProductTable && (
          <div className='boton-container'>
          <Boton onClick={() => createProductHandler && createProductHandler()} Nombre="Crear producto" />
          <Boton onClick={hideUserTable} Nombre="Ver tabla de usuarios" />
          <Boton onClick={hideSellTable} Nombre="Ver tabla ventas" />
          </div>
        )}
        {showSellTable && (
          <div className='boton-container'>
          <Boton onClick={hideUserTable} Nombre="Ver tabla de usuarios" />
          <Boton onClick={hideProducTable} Nombre="Ver tabla productos" />
          </div>
        )}
      </div>
      {showUsertable && <UserTable users={users} setUsers={setUsers} setCreateUserHandler={setCreateUserHandler}/>}
      {showProductTable && <ProductTable products={products} setProducts={setProducts} setCreateProductHandler={setCreateProductHandler} />}
      {showSellTable && <SellTable sells={sells}/>}
    </div>
  );
}
export default VistaAdmin