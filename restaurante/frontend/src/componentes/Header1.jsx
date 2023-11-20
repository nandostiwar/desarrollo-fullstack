import React from "react";
import Swal from 'sweetalert2';
import './stylesC/header_admin.css';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header1 = ({titulo_principal, titulo, enlace}) => {
  const goTo = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cerrar sesión?',
      iconHtml: '<img src="/src/componentes/imagenes/cerrar_sesion.png" class="swal2-icon" alt="Cerrar Sesión" style="width: 50px; height: 50px;" />',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        goTo('/');
        Swal.fire('¡Sesión cerrada!', 'Se ha cerrado sesion con exito!', 'success');
      }
    });
  };

    return (
        <>
        <header>
          <div className="logo">{titulo_principal}</div>
          <nav>
          {titulo && enlace && (<Link to="#" style={{ marginRight: '15px' }} onClick={handleLogout}>{titulo}
          <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: '5px' }} />
          </Link>
          )}
          </nav>
        </header>
        </>
    );
  };
  export default Header1;