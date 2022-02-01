import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Modal = ({ handleClose,details,date }) => {
    const [tableData,SetTableData] = useState([
        {N_FAC:details.N_FAC,CODE_CLI:details.CODE_CLI,CODE_WAREH:details.CODE_WAREH,Y_FAC:details.Y_FAC,N_FAC:details.N_FAC}    
    ])
const [count,SetCount] = useState(0);
const [q,setQ] = useState(qty)
const [Message,SetMessage] = useState("");

const maxQty = (event) =>{
  const newValue = event.target.value;
    if(newValue<0 || newValue>qty){
      SetMessage("Warning qty entered is Bigger than the total qty from the invoice!");
    }
    else{
          setQ(qty-newValue);
        }      
    }
const appendArray=()=>{
    let newR = {
        N_FAC:details.N_FAC,
        CODE_CLI:details.CODE_CLI,
        CODE_WAREH:details.CODE_WAREH,
        Y_FAC:details.Y_FAC,
        N_FAC:details.N_FAC,
      };
      let row = tableData;
      let r = row.concat(newR);
      SetTableData(r);
      SetCount(count+1);
    }
    
  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="App">
        <h1>Invoice Quantity : {qty}</h1>
        <h1>current available Quantity : {q}</h1>
        <h1>{count}</h1>
        {Message && (<p style={{color:"red"}}className="error"> {Message} </p>)}
        <form action="" method="get">
        <thead>
            <tr>
              <th scope="col">N_FAC</th>
              <th scope="col">CODE_CLI</th>
              <th scope="col">CODE_WAREH</th>
              <th scope="col">Y_FAC</th>
              <th scope="col">N_FAC</th>
              <th scope="col">Expiry</th>
              <th scope="col">Add</th>
            </tr>
    </thead>
    <tbody>        
            {tableData.map((i,index)=>(
              <tr key={index}>                  
                <td>{i.N_FAC}</td>
                <td>{i.CODE_CLI}</td>
                <td>{i.CODE_WAREH}</td>
                <td>{i.Y_FAC}</td>
                <td>{i.N_FAC}</td>
                <td><input type="number" required min="1" placeholder={qty} max={qty-1}onChange={maxQty}></input></td>
                <td><input type="date" value={date}/></td>  
                <td><a href="" onClick={appendArray}>Add Expiry</a></td>
              </tr>    
            ))}           
      </tbody>
        <input type="submit" value="submit"/>
        </form>
        <button onClick={handleClose}>Cancel</button>
        </div>     
      </section>   
    </div>
  );
};

export default Modal