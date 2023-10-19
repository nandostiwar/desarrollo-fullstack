import '../styles/TableUsers.css';

function TableUsers({data}){
    
    return (
        <table id="table-user">
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>rol</th>
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

export default TableUsers;