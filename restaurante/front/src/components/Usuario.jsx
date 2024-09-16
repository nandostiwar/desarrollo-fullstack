import React from 'react';
import './styles/tabla.css';

function Usuario({ usuarios, onDeleteUsuario }) {
    return (
        <div>
            <h2 className='title'>Tabla de Usuarios</h2>
            <table className="usuario-table">
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
                    {usuarios.map((usuario) => (
                        <tr key={usuario.usuarioname}>
                            <td>{usuario.id}</td>
                            <td>{usuario.usuarioname}</td>
                            <td>{usuario.Edad}</td>
                            <td>{usuario.role}</td>
                            <td>
                                <button className="delete-button" onClick={() => onDeleteUsuario(usuario.usuarioname)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuario;
