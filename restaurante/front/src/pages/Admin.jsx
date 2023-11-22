import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import UserTable from '../componentes/Usertable'
import Boton from '../componentes/Boton.jsx'
import ProductTable from '../componentes/Productable'
import SellTable from '../componentes/Selltable'
import GastoTable from '../componentes/Gastotable.jsx'
import Header from '../componentes/Header'
import Punto from '../componentes/Punto'



function Admin ({ userRole }) {

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
  const [gasto, setGasto] = useState([]);
  const [sells, setSells] = useState([]);
  const [showProductTable, setShowProductTable] = useState(false);
  const [showUsertable, setShowUserTable] = useState(true);
  const [showSellTable, setShowSellTable] = useState(false);
  const [showGastoTable, setShowGastoTable] = useState(false);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de usuarios
    axios.get('http://localhost:4700/v1/restaurante/users') // Asegúrate de que la ruta coincida con la definida en el backend
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
    axios.get('http://localhost:4700/v1/restaurante/products') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const productsData = response.data;
        setProducts(productsData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de productos', error);
      });
  }, []);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de productos
    axios.get('http://localhost:4700/v1/restaurante/gasto') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const gastoData = response.data;
        setGasto(gastoData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de gasto', error);
      });
  }, []);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de ventas
    axios.get('http://localhost:4700/v1/restaurante/sells') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const sellsData = response.data;
        setSells(sellsData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de ventas', error);
      });
  }, []);

  const handleDeleteUser = (username) => {
    Swal.fire({
      title: '¿Estás seguro?',
      html: `¿Desea eliminar el usuario: <strong>${username}</strong>? Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma la eliminación, realiza la solicitud DELETE
        axios
          .delete(`http://localhost:4700/v1/restaurante/users/${username}`)
          .then((response) => {
            if (response.data.success) {
              // El usuario se eliminó con éxito, puedes realizar acciones adicionales si es necesario
              console.log('Usuario eliminado con éxito');
              Swal.fire({
                icon: 'success',
                title: 'Eliminado!',
                html: `Desea eliminar el usuario: <strong>${username}</strong>? Esta acción no se puede deshacer.`,
              });
              // Actualiza la lista de usuarios
              setUsers((prevUsers) =>
                prevUsers.filter((user) => user.username !== username)
              );
            } else {
              // El servidor devolvió un error
              console.error('Error al eliminar el usuario');
            }
          })
          .catch((error) => {
            console.error('Error al eliminar el usuario', error);
          });
      }
    });
  };

  const handleDeleteProduct = (productName) => {
    Swal.fire({
      title: '¿Estás seguro?',
      html: `¿Desea eliminar el producto: <strong>${productName}</strong>? Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma la eliminación, realiza la solicitud DELETE
        axios
          .delete(`http://localhost:4700/v1/restaurante/product/${productName}`)
          .then((response) => {
            if (response.data.success) {
              // El usuario se eliminó con éxito, puedes realizar acciones adicionales si es necesario
              console.log('Producto eliminado con éxito');
              Swal.fire({
                icon: 'success',
                title: 'Eliminado!',
                html: `El producto: <strong>${productName}</strong> se elimino correctamente.`,
              });
              // Actualiza la lista de usuarios
              setProducts((prevProducts) =>
              prevProducts.filter((product) => product.productName !== productName)
              );
            } else {
              // El servidor devolvió un error
              console.error('Error al eliminar el producto');
            }
          })
          .catch((error) => {
            console.error('Error al eliminar el producto', error);
          });
      }
    });
  };

  const handleCreateUser = () => {
    Swal.fire({
      title: 'Crear Nuevo Usuario',
      html: `
        <input type="number" id="id" class="swal2-input" placeholder="Cedula" min="0" step="1">
        <input type="number" id="age" class="swal2-input" placeholder="Edad" min="0" step="1">
        <input id="username" class="swal2-input" placeholder="Nombre de usuario">
        <input id="password" type="password" class="swal2-input" placeholder="Contraseña">
        <select id="role" class="swal2-select">
          <option value="Administrador">Administrador</option>
          <option value="Mesero">Mesero</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const username = Swal.getPopup().querySelector('#username').value;
        const password = Swal.getPopup().querySelector('#password').value;
        const age = Swal.getPopup().querySelector('#age').value;
        const id = Swal.getPopup().querySelector('#id').value;
        const role = Swal.getPopup().querySelector('#role').value;
  
        // Validaciones
        if (!username || !password || !age || !id) {
          Swal.showValidationMessage('Todos los campos son obligatorios.');
          return;
        }

        // Realizar una solicitud POST al backend para crear un nuevo usuario
        axios
          .post('http://localhost:4700/v1/restaurante/crearUsuario', { username, password, role, age, id })
          .then((response) => {
            if (response.data.success) {
              // El usuario se creó con éxito, puedes realizar acciones adicionales si es necesario
              Swal.fire({
                icon: 'success',
                title: '¡Usuario creado con exito!',
                html: `El usuario que creaste ha sido añadido al servidor!`,
              });
              console.log('Usuario creado con éxito');
              // Actualiza la lista de usuarios
              axios.get('http://localhost:4700/v1/restaurante/users')
                .then((response) => {
                  const usersData = response.data;
                  setUsers(usersData); // Actualiza la lista de usuarios
                })
            } else {
              // El servidor devolvió un error
              console.error('Error al crear el usuario');
            }
          })
          .catch((error) => {
            console.error('Error al crear el usuario', error);
          });
      },
    });
  };  

  const handleCreateProduct = () => {
    Swal.fire({
      title: 'Crear Nuevo Producto',
      html: `
        <input type="number"id="id"class="swal2-input" placeholder="Codigo o id" min="0" step="1">
        <input id="productName" class="swal2-input" placeholder="Nombre de producto">
        <input type="number" id="price" class="swal2-input" placeholder="Precio" min="0" step="1">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const productName = Swal.getPopup().querySelector('#productName').value;
        const price = Swal.getPopup().querySelector('#price').value;
        const id = Swal.getPopup().querySelector('#id').value;

         // Validaciones
         if (!productName || !price || !productName || !id) {
          Swal.showValidationMessage('Todos los campos son obligatorios.');
          return;
        }

        axios
          .post('http://localhost:4700/v1/restaurante/crearProducto', { productName, price, id })
          .then((response) => {
            if (response.data.success) {
              // El producto se creó con éxito, puedes realizar acciones adicionales si es necesario
              Swal.fire({
                icon: 'success',
                title: 'Producto creado con exito!',
                html: `El producto que creaste ha sido añadido al servidor!`,
              });
              console.log('Producto creado con éxito');
              // Actualiza la lista de productos
              axios.get('http://localhost:4700/v1/restaurante/products') // Asegúrate de que la ruta coincida con la definida en el backend
                .then((response) => {
                  const productsData = response.data;
                  setProducts(productsData); // Asignación de datos al estadoista de productos
                })
            } else {
              // El servidor devolvió un error
              console.error('Error al crear el usuario');
            }
          })
          .catch((error) => {
            console.error('Error al crear el usuario', error);
          });
      },
    });
  };


  //GASTO
  const handleCreateGasto = () => {
    Swal.fire({
      title: 'Crear Nuevo Gasto',
      html: `
        <input type="number"id="id"class="swal2-input" placeholder="Codigo o id" min="0" step="1">
        <input id="gastoName" class="swal2-input" placeholder="Nombre de gasto">
        <input type="number" id="price" class="swal2-input" placeholder="Precio" min="0" step="1">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const gastoName = Swal.getPopup().querySelector('#gastoName').value;
        const price = Swal.getPopup().querySelector('#price').value;
        const id = Swal.getPopup().querySelector('#id').value;

         // Validaciones
         if (!gastoName || !price || !gastoName || !id) {
          Swal.showValidationMessage('Todos los campos son obligatorios.');
          return;
        }

        axios
          .post('http://localhost:4700/v1/restaurante/crearGasto', { gastoName, price, id })
          .then((response) => {
            if (response.data.success) {
              // El producto se creó con éxito, puedes realizar acciones adicionales si es necesario
              Swal.fire({
                icon: 'success',
                title: 'Gasto creado con exito!',
                html: `El gasto que creaste ha sido añadido al servidor!`,
              });
              console.log('Gasto creado con éxito');
              // Actualiza la lista de productos
              axios.get('http://localhost:4700/v1/restaurante/gasto') // Asegúrate de que la ruta coincida con la definida en el backend
                .then((response) => {
                  const gastoData = response.data;
                  setGasto(gastoData); // Asignación de datos al estadoista de productos
                })
            } else {
              // El servidor devolvió un error
              console.error('Error al crear el usuario');
            }
          })
          .catch((error) => {
            console.error('Error al crear el usuario', error);
          });
      },
    });
  };
//TERMINA LA FUNCION GASTO

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
  const hideGastoTable = () => {
    setShowProductTable(false);
    setShowUserTable(false);
    setShowSellTable(false);
    setShowGastoTable(!showGastoTable);
  };

  const hideSellTable = () => {
    setShowProductTable(false);
    setShowUserTable(false);
    setShowSellTable(!showSellTable);
  };

  return (
    <div>
        <Header Nombre="Vista admin"></Header>
        <div>
        {showUsertable && (
          <div className='boton-container'>
            <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
            </Link>
            <Boton onClick={handleCreateUser} Nombre="Crear usuario" />
            <Boton onClick={hideGastoTable} Nombre="Ver tabla gastos" />
            <Boton onClick={hideProducTable} Nombre="Ver tabla productos" />
            <Boton onClick={hideSellTable} Nombre="Ver tabla ventas" />
          </div>
        )}
        {showProductTable && (
          <div className='boton-container'>
          <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
          </Link>
          <Boton onClick={handleCreateProduct} Nombre="Crear producto" />
          <Boton onClick={hideUserTable} Nombre="Ver tabla de usuarios" />
          </div>
        )}
         {showGastoTable && (
          <div className='boton-container'>
          <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
          </Link>
          <Boton onClick={handleCreateGasto} Nombre="Crear gasto" />
          <Boton onClick={hideUserTable} Nombre="Ver tabla de usuarios" />
          </div>
        )}
        {showSellTable && (
          <div className='boton-container'>
          <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
          </Link>
          <Boton onClick={hideUserTable} Nombre="Ver tabla de usuarios" />
          <Boton onClick={hideProducTable} Nombre="Ver tabla productos" />
          </div>
        )}
      </div>
      {showUsertable && <UserTable users={users} onDeleteUser={handleDeleteUser} />}
      {showProductTable && <ProductTable products={products} onDeleteProduct={handleDeleteProduct}/>}
      {showGastoTable && <GastoTable gasto={gasto}/>}
      {showSellTable && <SellTable sells={sells}/>}
    </div>
  )
}

export default Admin;