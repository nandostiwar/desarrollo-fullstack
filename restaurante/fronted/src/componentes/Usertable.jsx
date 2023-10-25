// UserTable.js
import React from 'react';
import './stylesC/tabla.css';

function UserTable({ users, onDeleteUser }) {
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
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.username}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.age}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="delete-button" onClick={() => onDeleteUser(user.username)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;


