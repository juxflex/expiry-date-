import React from 'react';
import Invoices from '../src/components/Invoices';
import InvoiceDetails from '../src/components/InvoiceDetails';
import SideBar from '../src/components/SideBar';
import Bootstrap, { Container,Row,Col  } from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import InvoicesPage from './Pages/Invoices';
import InvoicesDetPage from './Pages/InvDetails';
import Print from './components/Print';

import '../src/App.css';
const App = () => {
    
    return(
       <Router>
            <div className="App"> 
            <SideBar/>           
                <Routes>
                    <Route exact path="/Inv" element={< InvoicesPage/>}></Route>,
                    <Route exact path="/Inv/:from/:to" element={< InvoicesPage/>}></Route>,
                    <Route exact path="/InvDet/:Y_FAC/:N_FAC" element={<InvoicesDetPage/>}></Route>, 
                    <Route exact path="/InvDet/:0/:0" element={<InvoicesDetPage/>}></Route>,   
                    <Route exact path="/print" element={<Print/>}></Route>,                          
                </Routes>                       
            </div> 
       </Router>
  )
}

export default App;