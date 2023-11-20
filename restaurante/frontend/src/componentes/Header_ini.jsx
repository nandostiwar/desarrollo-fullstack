import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from './imagenes/Logo.png';
import './stylesC/styles_comp.css';

const Header_inicio = ({ titulo, enlace }) => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                <Link to={enlace} style={{ marginRight: '15px'}}>{titulo}
                <FontAwesomeIcon icon={faSignInAlt} style={{ marginLeft: '5px', verticalAlign: 'middle' }}/>
                </Link>
                </nav>
            </header>
        </>
    );
};

export default Header_inicio;


