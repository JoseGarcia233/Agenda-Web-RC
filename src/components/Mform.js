// import DtApiPost from "../services/DtApiPost"
  import { useState } from "react";
  import axios from 'axios';

const From = () =>   {
  const api = 'http://www.raydelto.org/agenda.php';
  const [data, setData] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    
  });

    function submit(e){
      e.preventDefault();
      axios.post(api,{
        nombre:data.nombre,
        apellido:data.apellido,
        telefono:data.telefono
      }) 
      .then(res =>{
        console.log(res.data);
        window.location.reload()
      })
    }
  
    function handle(e){
      //
      const ndata = {...data}
      ndata[e.target.id] = e.target.value
      setData(ndata)
      console.log(ndata)
    }
    return(
  <div className='container-form'>
    <h1>Phoneboock</h1>
      <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=>handle(e)} id='nombre' value={data.nombre} placeholder='Name' type="text" required />
          <br/>
        <input onChange={(e)=>handle(e)} id='apellido'value={data.apellido} placeholder='Last Name'type="text" required />
          <br/>
        <input onChange={(e)=>handle(e)}  id='telefono' value={data.telefono} placeholder='phone' type="text" required />
          <br/>
        <button type="submit" class="btn btn-outline-primary">Save</button>

      </form>
  </div>
    

    )};

export default From;