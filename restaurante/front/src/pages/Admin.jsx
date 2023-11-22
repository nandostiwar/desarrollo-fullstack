import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import Usuario from '../components/Usuario.jsx'
import Boton from '../components/Boton.jsx'
import Producto from '../components/Producto'
import Venta from '../components/Venta.jsx'
import Saldo from '../components/Saldo.jsx'
import Header from '../components/Header'
import Punto from '../components/Punto'



function Admin ({ usuarioRole }) {

  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario tiene permiso para acceder a esta vista
    if (usuarioRole !== 'Administrador') {
      // Redirigir al usuario a la página de inicio de sesión (ruta index)
      navigate('/');
    }
  }, [usuarioRole, navigate]);

  if (usuarioRole !== 'Administrador') {
    // Evitar que se renderice el contenido de VistaAdmin si se redirige
    return null;
  }
  const [usuarios, setUsuarios] = useState([])
  const [productos, setProductos] = useState([]);
  const [saldo, setSaldo] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [showProducto, setShowProducto] = useState(false);
  const [showUsuario, setShowUsuario] = useState(true);
  const [showVenta, setShowVenta] = useState(false);
  const [showSaldo, setShowSaldo] = useState(false);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de usuarios
    axios.get('http://localhost:4700/v1/restaurante/usuarios') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const usuariosData = response.data;
        setUsuarios(usuariosData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de usuarios', error);
      });
  }, []);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de productos
    axios.get('http://localhost:4700/v1/restaurante/productos') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const productosData = response.data;
        setProductos(productosData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de productos', error);
      });
  }, []);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de productos
    axios.get('http://localhost:4700/v1/restaurante/saldo') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const saldoData = response.data;
        setSaldo(saldoData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de saldo', error);
      });
  }, []);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener la lista de ventas
    axios.get('http://localhost:4700/v1/restaurante/ventas') // Asegúrate de que la ruta coincida con la definida en el backend
      .then((response) => {
        const ventasData = response.data;
        setVentas(ventasData); // Asignación de datos al estado
      })
      .catch((error) => {
        console.error('Error al obtener la lista de ventas', error);
      });
  }, []);

  const handleDeleteUsuario = (usuarioname) => {
    Swal.fire({
      title: '¿Estás seguro?',
      html: `¿Desea eliminar el usuario: <strong>${usuarioname}</strong>? Esta acción no se puede deshacer.`,
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
          .delete(`http://localhost:4700/v1/restaurante/usuarios/${usuarioname}`)
          .then((response) => {
            if (response.data.success) {
              // El usuario se eliminó con éxito, puedes realizar acciones adicionales si es necesario
              console.log('Usuario eliminado con éxito');
              Swal.fire({
                icon: 'success',
                title: 'Eliminado!',
                html: `Desea eliminar el usuario: <strong>${usuarioname}</strong>? Esta acción no se puede deshacer.`,
              });
              // Actualiza la lista de usuarios
              setUsuarios((prevUsuarios) =>
                prevUsuarios.filter((usuario) => usuario.usuarioname !== usuarioname)
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

  const handleDeleteProducto = (productoName) => {
    Swal.fire({
      title: '¿Estás seguro?',
      html: `¿Desea eliminar el producto: <strong>${productoName}</strong>? Esta acción no se puede deshacer.`,
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
          .delete(`http://localhost:4700/v1/restaurante/producto/${productoName}`)
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
              setProductos((prevProductos) =>
              prevProductos.filter((product) => producto.productoName !== productoName)
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

  const handleCreateUsuario = () => {
    Swal.fire({
      title: 'Crear Nuevo Usuario',
      html: `
        <input type="number" id="id" class="swal2-input" placeholder="Cedula" min="0" step="1">
        <input type="number" id="Edad" class="swal2-input" placeholder="Edad" min="0" step="1">
        <input id="usuarioname" class="swal2-input" placeholder="Nombre de usuario">
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
        const usuarioname = Swal.getPopup().querySelector('#usuarioname').value;
        const password = Swal.getPopup().querySelector('#password').value;
        const Edad = Swal.getPopup().querySelector('#Edad').value;
        const id = Swal.getPopup().querySelector('#id').value;
        const role = Swal.getPopup().querySelector('#role').value;
  
        // Validaciones
        if (!usuarioname || !password || !Edad || !id) {
          Swal.showValidationMessage('Todos los campos son obligatorios.');
          return;
        }

        // Realizar una solicitud POST al backend para crear un nuevo usuario
        axios
          .post('http://localhost:4700/v1/restaurante/crearUsuario', { usuarioname, password, role, Edad, id })
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
              axios.get('http://localhost:4700/v1/restaurante/usuarios')
                .then((response) => {
                  const usuariosData = response.data;
                  setUsuarios(usuariosData); // Actualiza la lista de usuarios
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

  const handleCreateProducto = () => {
    Swal.fire({
      title: 'Crear Nuevo Producto',
      html: `
        <input type="number"id="id"class="swal2-input" placeholder="Codigo o id" min="0" step="1">
        <input id="productoName" class="swal2-input" placeholder="Nombre de producto">
        <input type="number" id="precio" class="swal2-input" placeholder="Precio" min="0" step="1">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const productoName = Swal.getPopup().querySelector('#productoName').value;
        const precio = Swal.getPopup().querySelector('#precio').value;
        const id = Swal.getPopup().querySelector('#id').value;

         // Validaciones
         if (!productoName || !precio || !productoName || !id) {
          Swal.showValidationMessage('Todos los campos son obligatorios.');
          return;
        }

        axios
          .post('http://localhost:4700/v1/restaurante/crearProducto', { productoName, precio, id })
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
              axios.get('http://localhost:4700/v1/restaurante/productos') // Asegúrate de que la ruta coincida con la definida en el backend
                .then((response) => {
                  const productosData = response.data;
                  setProductos(productosData); // Asignación de datos al estadoista de productos
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


  //SALDO
  const handleCreateSaldo = () => {
    Swal.fire({
      title: 'Crear Nuevo saldo',
      html: `
        <input type="number"id="id"class="swal2-input" placeholder="Codigo o id" min="0" step="1">
        <input id="saldoName" class="swal2-input" placeholder="Nombre de saldo">
        <input type="number" id="precio" class="swal2-input" placeholder="Precio" min="0" step="1">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const saldoName = Swal.getPopup().querySelector('#saldoName').value;
        const precio = Swal.getPopup().querySelector('#precio').value;
        const id = Swal.getPopup().querySelector('#id').value;

         // Validaciones
         if (!saldoName || !precio || !saldoName || !id) {
          Swal.showValidationMessage('Todos los campos son obligatorios.');
          return;
        }

        axios
          .post('http://localhost:4700/v1/restaurante/crearSaldo', { saldoName, precio, id })
          .then((response) => {
            if (response.data.success) {
              // El producto se creó con éxito, puedes realizar acciones adicionales si es necesario
              Swal.fire({
                icon: 'success',
                title: 'Saldo creado con exito!',
                html: `El saldo que creaste ha sido añadido al servidor!`,
              });
              console.log('Saldo creado con éxito');
              // Actualiza la lista de productos
              axios.get('http://localhost:4700/v1/restaurante/saldo') // Asegúrate de que la ruta coincida con la definida en el backend
                .then((response) => {
                  const saldoData = response.data;
                  setSaldo(saldoData); // Asignación de datos al estadoista de productos
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
//TERMINA LA FUNCION SALDO

  const hideProducto = () => {
    setShowProducto(!showProducto);
    setShowUsuario(false);
    setShowVenta(false);
  };

  const hideUsuario = () => {
    setShowProducto(false);
    setShowUsuario(true);
    setShowVenta(false);
  };
  const hideSaldo = () => {
    setShowProducto(false);
    setShowUsuario(false);
    setShowVenta(false);
    setShowSaldo(!showSaldo);
  };

  const hideVenta = () => {
    setShowProducto(false);
    setShowUsuario(false);
    setShowVenta(!showVenta);
  };

  return (
    <div>
        <Header Nombre="Vista admin"></Header>
        <div>
        {showUsuario && (
          <div className='boton-container'>
            <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
            </Link>
            <Boton onClick={handleCreateUsuario} Nombre="Crear usuario" />
            <Boton onClick={hideSaldo} Nombre="SALDO" />
            <Boton onClick={hideProducto} Nombre="PRODUCTOS" />
            <Boton onClick={hideVenta} Nombre="VENTAS" />
          </div>
        )}
        {showProducto && (
          <div className='boton-container'>
          <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
          </Link>
          <Boton onClick={handleCreateProducto} Nombre="Crear Producto" />
          <Boton onClick={hideUsuario} Nombre="Ver tabla de usuarios" />
          </div>
        )}
         {showSaldo && (
          <div className='boton-container'>
          <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
          </Link>
          <Boton onClick={handleCreateSaldo} Nombre="Crear Saldo" />
          <Boton onClick={hideUsuario} Nombre="Ver tabla de usuarios" />
          </div>
        )}
        {showVenta && (
          <div className='boton-container'>
          <Link to="/">
              <Boton Nombre="Cerrar sesion"/>
          </Link>
          <Boton onClick={hideUsuario} Nombre="Ver tabla de usuarios" />
          <Boton onClick={hideProducto} Nombre="Ver tabla Productos" />
          </div>
        )}
      </div>
      {showUsuario && <Usuario usuarios={usuarios} onDeleteUsuario={handleDeleteUsuario} />}
      {showProducto && <Producto productos={productos} onDeleteProducto={handleDeleteProducto}/>}
      {showSaldo && <Saldo saldo={saldo}/>}
      {showVenta && <Venta ventas={ventas}/>}
    </div>
  )
}

export default Admin;