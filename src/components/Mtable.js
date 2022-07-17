  import DtApi from "../services/DtApi"
  const Table = () => {
    const[contacts]  = DtApi() 
    return (
            
    <div className="container-table">
        <h1>contacts: {contacts.length}</h1>
        <table class="table">
            <thead class="thead-info">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Number Phone</th>
                </tr>
            </thead>
            {
                contacts.map(({
                    nombre,
                    apellido,
                    telefono,
                    }) => {
                    return (
                    <tbody> 
                        <tr>
                        <td class="table-active">{nombre}</td>
                        <td class="table-active">{apellido}</td>
                        <td class="table-active">{telefono}</td>
                        </tr>
                    </tbody>
                )  
            })
        }  
        </table>
    </div>
)
  
}

export default Table;