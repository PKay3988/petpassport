import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD
import Dashboard from './components/Dashboard'
// import  Login from'./Component/Login';
import ChoosePet from './components/ChoosePet';
import AddPet from './components/AddPet';
import Login from './components/Login';
import {BrowserRouter as Router} from 'react-router-dom'
import { Link } from 'react-router-dom'
// import ReactRoutes from "./ReactRoutes";
=======
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRoutes from "./ReactRoutes";
>>>>>>> b5e1bb5f4a8dafc11c8c30f32a933bc18b195055
import Vets from "./components/Vets";
import Nav from "./components/Nav";
import RegisterUser from "./components/RegisterUser";

// import { BrowserRouter as Switch, Router, Route, Link, useHistory } from 'react-router-dom';
// import { Switch } from 'react-router';

function App() {
  return (

     <Router> 

          <div className="App">
<<<<<<< HEAD
               
               <h1> pet passport </h1>

               {/* <Link to="/login">Login</Link> */}
               
               {/* <button>
                    <Link to="/choosepet">Login Successful</Link>
               </button> */}

               {/* <Dashboard /> */}
               {/* <Login /> */}
               {/* <ReactRoutes /> */}
               <ChoosePet />
               <AddPet />
=======
               <h1> Pet Passport </h1>
                    <Nav />
                    <ReactRoutes /> 
>>>>>>> b5e1bb5f4a8dafc11c8c30f32a933bc18b195055
          </div>
        
     </Router> 
  );
}

export default App;
