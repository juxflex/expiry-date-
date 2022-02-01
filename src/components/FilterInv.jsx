import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//import {Form,Button,Row,Col,Container} from 'react-bootstrap';*/
import axios from 'axios';
import {useEffect,useState} from 'react';


const SearchFilter = () => {
  
  useEffect(()=>{
    getClients();
  },[])

  const [clients , setClients] = useState([]);
  const [movements , setMovements] = useState([]);
  const [text,setText] = useState('');
  const [suggestions,setSuggestions] = useState([])
  
  const getClients = async () =>{
     await axios.get("http://localhost:8000/api/clients").then((res)=>{
      setClients(res.data);
      console.log(res.data); 
    })
  }
  const getMvtType = async () =>{
    await axios.get("http://localhost:8000/api/transtype").then((res)=>{
     setMovements(res.data);
     console.log(res.data); 
   })
 }
const onChangeHandler = (event)=>{

}
 /*const searchClients = (text) =>{
  let matches = clients.map((client)=>{(client.map((c,i)=>{c.filter((client)=>{ 
    const regex = new RegExp(`${text}`,"gi");
    return client.DESC_CLI.match(regex);
  })
  setSuggestions(matches);
 }*/
  return (
   <div className="container">    
     {clients.map((client)=>{
       (
        client.map((c,i)=>{ 
         })      
       )
     })}  
     
     {suggestions && suggestions.map((client,index)=>(
       <div key={index}>
         <p>{client.DESC_CLI}</p>
       </div>
     ))}
   </div>
  );
}
export default SearchFilter;