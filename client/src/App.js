import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRoutes from "./ReactRoutes";


function App() {
  return (

     <Router> 

          <div className="App">
               
               <h1> PET PASSPORT </h1>

               {/* <Link to="/Login">Login</Link> */}
               
               {/* <button>
                    <Link to="/choosepet">Login Successful</Link>
               </button> */}

               {/* <Dashboard /> */}
               {/* <Login /> */}
               <ReactRoutes />
               
          </div>
        
     </Router> 
  );
}

export default App;
