import React from "react";
import './stylesC/header_admin.css';
import Logo from './imagenes/Logo.png';

const Header1 = ({titulo_principal, titulo, titulo1, titulo2}) => {
    return (
          <header>
               <div className="encabezado">{titulo_principal}</div>
                <nav>
                    <a href="#" style={{ marginRight: '15px' }}>{titulo}</a>
                    <a href="#">{titulo1}</a>
                    <a href="#" style={{ marginLeft: '10px', marginRight: '15px' }}>{titulo2}</a>
                </nav>
                <div className="imagen">
                <img src={Logo} alt="Logo" />
                </div>
          </header>
    );
  };
  export default Header1;