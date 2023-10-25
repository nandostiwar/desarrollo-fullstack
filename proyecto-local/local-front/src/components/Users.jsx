import '../styles/Users.css';

function Users({data}){
    
    return (
        <table id="table-user">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user)=>(
                    <tr key={user.nombre}>
                        <td>{user.nombre}</td>
                        <td>{user.rol}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Users;