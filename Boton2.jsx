import React from 'react';

// Definir un componente funcional llamado 'BotonPersonalizado'
const Boton2 = ({ texto, estilo, alHacerClic }) => {
    return (
        // Renderizar un botón con props para el texto, estilo y evento onClick
        <button style={estilo} onClick={alHacerClic}>
            {texto}
        </button>
    );
}

export default Boton2;