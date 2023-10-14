import '../styles/Consulta.css';

function Consulta({nombre, edad, telefono, correo, estrato}){
    return (
        <div className="consulta">
            <h4>Nombre: {nombre}</h4>
            <h4>Edad: {edad}</h4>
            <h4>Telefono: {telefono}</h4>
            <h4>Correo: {correo}</h4>
            <h4>Estrato: {estrato}</h4>
        </div>
    )
}

export default Consulta;