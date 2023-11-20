import React from 'react';
import './styles/Home.css';
import Header_inicio from '../componentes/Header_ini';
import Inicio from '../componentes/inicio';
import empanada from '../componentes/imagenes/empanadas.jpg';
import papa_aborrajada from '../componentes/imagenes/papa_aborrajada.jpg';
import filetes from '../componentes/imagenes/filetes.jpg';
import ensalada from '../componentes/imagenes/ensalada.jpg';
import salchipapa from '../componentes/imagenes/salchipapa.jpg';
import arroz_pollo from '../componentes/imagenes/arroz_pollo.jpg';
import arroz_mixto from '../componentes/imagenes/arroz_mixto.png';
import maduro from '../componentes/imagenes/maduro.jpg';
import frutas from '../componentes/imagenes/frutas.jpg';
import papas from '../componentes/imagenes/papas.jpg';
import carnes from '../componentes/imagenes/carnes.jpg';
import platano from '../componentes/imagenes/platano.jpg';
import arroz from '../componentes/imagenes/arroz.jpg';
import limones from '../componentes/imagenes/limones.jpg';
import queso from '../componentes/imagenes/queso.jpg';
import tomate from '../componentes/imagenes/tomate.jpg';

const Home = ({ }) => {
    return (
        <>
            <Header_inicio titulo="Iniciar sesion" enlace="/Login" />

            <div className="home-container">
                <h1>Bienvenido a la plataforma</h1>
                <p><b>Las ventas mas frecuentes</b></p>
                <main className="main-content">
                    <Inicio titulo="Empanada" imagen={empanada} descripcion="Empanadas de carne, pollo etc" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Papa aborrajada" imagen={papa_aborrajada} descripcion="Papa aborrjada, rellenas etc" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Filetes" imagen={filetes} descripcion="Filetes de carne rex, rojas etc" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Ensaladas" imagen={ensalada} descripcion="Ensaladas de frutas y espinacas" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Salchipapas" imagen={salchipapa} descripcion="Salchipapa con queso, con carne etc" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Arroz con pollo" imagen={arroz_pollo} descripcion="Maduro asado con queso" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Arroz mixto" imagen={arroz_mixto} descripcion="Maduro asado con queso" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Maduros" imagen={maduro} descripcion="Maduro asado con queso" inicia_sesion="Inicia sesion para consultar." />
                </main>
            </div>

            <div className="home-container">
                <p><b>Productos en inventario</b></p>
                <main className="main-content">
                    <Inicio titulo="Frutas" imagen={frutas} descripcion="Manzanas, bananas etc" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Papas" imagen={papas} descripcion="Papas pequeñas, grandes" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Carnes" imagen={carnes} descripcion="Carne de rex, carne rojas, blancas" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Platanos" imagen={platano} descripcion="Platanos, maduros" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Arroz" imagen={arroz} descripcion="Arroz blanco" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Limones" imagen={limones} descripcion="Limones pequeños. grandes" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Queso" imagen={queso} descripcion="Queso blanco, extra queso" inicia_sesion="Inicia sesion para consultar." />
                    <Inicio titulo="Tomate" imagen={tomate} descripcion="Tomates rojos, verdes" inicia_sesion="Inicia sesion para consultar." />
                </main>
            </div>

        </>
    );
};

  export default Home;