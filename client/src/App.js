import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/Dashboard'
// import  Login from'./Component/Login';
import ChoosePet from './components/ChoosePet';
import Login from './components/Login';
import {BrowserRouter as Router} from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReactRoutes from "./ReactRoutes";
import Vets from "./components/Vets";

// import { BrowserRouter as Switch, Router, Route, Link, useHistory } from 'react-router-dom';
// import { Switch } from 'react-router';



function App() {
  return (

     <Router> 

          <div className="App">
               
               <h1> pet passport </h1>

               <Link to="/login">Login</Link>
               
               <button>
                    <Link to="/choosepet">Login Successful</Link>
               </button>

               {/* <Dashboard /> */}
               {/* <Login /> */}
               <ReactRoutes />
               
          </div>
        
     </Router> 
  );
}

export default App;
