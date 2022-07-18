import {useState, useEffect} from 'react';
import axios from 'axios';

const GetList = () =>   {
  
  const [contacts, setContacts] = useState([]);
  const [err, setErr] = useState([]);
  
  useEffect(() => {
    // get request using axios inside useEffect React hook
    const getContacts = () =>{
        axios.get('http://www.raydelto.org/agenda.php')
        .then((response)=> setContacts(response.data))
        .catch((error )=> setErr(error))
    }
    getContacts()
  }, []);
  return[contacts, err]
  
};

export default GetList