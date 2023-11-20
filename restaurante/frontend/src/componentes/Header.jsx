import React from "react";
import Logo from './imagenes/Logo.png';
import './stylesC/styles_comp.css';


const Header = () => {
    return (
        <>
        <header>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav>       
            </nav>
        </header>
        </>
    );
};

export default Header;
