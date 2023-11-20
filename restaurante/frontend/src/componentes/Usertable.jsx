// UserTable.js
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './stylesC/tabla.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function UserTable({ users, setUsers, setCreateUserHandler }) {

    useEffect(() => {
        setCreateUserHandler(() => handleCreateUser);
      }, [setCreateUserHandler]);

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
              .post('http://localhost:3000/verusuarios/crearUsuario', { username, password, role, age, id })
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
                  axios.get('http://localhost:3000/verusuarios/users')
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

    const handleDeleteUser = (id) => {
        Swal.fire({
          title: '¿Estás seguro?',
          html: `¿Desea eliminar el usuario: <strong>${id}</strong>? Esta acción no se puede deshacer.`,
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
              .delete(`http://localhost:3000/verusuarios/users/${id}`)
              .then((response) => {
                if (response.data.success) {
                  // El usuario se eliminó con éxito, puedes realizar acciones adicionales si es necesario
                  console.log('Usuario eliminado con éxito');
                  Swal.fire({
                    icon: 'success',
                    title: 'Eliminado!',
                    html: `El usuario <strong>${id}</strong> Fue eliminado con exito.`,
                  });
                  // Actualiza la lista de usuarios
                  setUsers((prevUsers) =>
                    prevUsers.filter((user) => user.id !== id)
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

    const handleEditUser = (user) => {
        Swal.fire({
        title: 'Editar Usuario',
        width: 900,
        html: `
            <div style="display: flex; gap: 10px; padding: 10px;">
            <div style="flex: 1;">
                <h3 style="margin-bottom: 10px;">Datos Actuales</h3>
                <input id="id_old" class="swal2-input" value="${user.id || ''}" readonly>
                <input id="username_old" class="swal2-input" value="${user.username || ''}" readonly>
                <input id="password_old" class="swal2-input" value="${user.password || ''}" readonly>
                <input id="age_old" class="swal2-input" value="${user.age || ''}" readonly>
                <input id="role_old" class="swal2-input" value="${user.role || ''}" readonly>
            </div>
            <div style="flex: 1;">
                <h3 style="margin-bottom: 10px;">Modificar</h3>
                <input type="number" id="id_nuevo" class="swal2-input" placeholder="Cedula" min="0" step="1" value="${user.id || ''}" readonly>
                <input id="username_nuevo" class="swal2-input" placeholder="Nombre de usuario">
                <input id="password_nuevo" type="password" class="swal2-input" placeholder="Contraseña">
                <input type="number" id="age_nuevo" class="swal2-input" placeholder="Edad" min="0" step="1" >
                <select id="role_nuevo" class="swal2-select" style="margin-top: 10px;">
                <option value="" disabled selected>Seleccionar Rol</option>
                <option value="Administrador">Administrador</option>
                <option value="Mesero">Mesero</option>
                </select>
            </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const id = Swal.getPopup().querySelector('#id_nuevo').value;
            const username = Swal.getPopup().querySelector('#username_nuevo').value || user.username;
            const password = Swal.getPopup().querySelector('#password_nuevo').value || user.password;
            const age = Swal.getPopup().querySelector('#age_nuevo').value || user.age;
            const role = Swal.getPopup().querySelector('#role_nuevo').value || user.role;
    
        const changesMade = username !== user.username || password !== user.password || age !== user.age || role !== user.role;

        if (!changesMade) {
            Swal.showValidationMessage('No se realizaron cambios.');
            return false; // Esto evitará que se cierre el formulario
        }
    
            // Realizar una solicitud PUT al backend para editar el usuario
            axios
            .put(`http://localhost:3000/verusuarios/editarUsuario/${id}`, { id, username, password, role, age })
            .then((response) => {
                if (response.data.success) {
                // El usuario se editó con éxito
                Swal.fire({
                    icon: 'success',
                    title: '¡Usuario editado con éxito!',
                    html: `Los cambios en el usuario han sido guardados en el servidor.`,
                });
                console.log('Usuario editado con éxito');
                // Actualiza la lista de usuarios
                axios.get('http://localhost:3000/verusuarios/users')
                    .then((response) => {
                    const usersData = response.data;
                    setUsers(usersData); // Actualiza la lista de usuarios
                    });
                } else {
                // El servidor devolvió un error
                console.error('Error al editar el usuario');
                }
            })
            .catch((error) => {
                console.error('Error al editar el usuario', error);
            });
        },
        });
    };

    return (
        <div>
            <h2 className='title'>Tabla de Usuarios</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Rol</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.age}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEditUser(user)}>
                                     <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </td>
                            <td>
                                <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;