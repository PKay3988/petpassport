import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRoutes from "./ReactRoutes";
import Vets from "./components/Vets";
import Nav from "./components/Nav";
import RegisterUser from "./components/RegisterUser";

// import { BrowserRouter as Switch, Router, Route, Link, useHistory } from 'react-router-dom';
// import { Switch } from 'react-router';
=======
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
// import  Login from'./Component/Login';
import MapView from './components/MapView';
>>>>>>> b7e05fa (mapview - renders map)

function App() {
  return (

<<<<<<< HEAD
     <Router> 
=======
    <Router> 
    <div className="App">
     <h1> pet passport </h1>
     <Dashboard />
     <MapView />
    </div>
>>>>>>> b7e05fa (mapview - renders map)

          <div className="App">
               <h1> Pet Passport </h1>
                    {/* <Nav /> */}
                    <ReactRoutes /> 
          </div>
        
     </Router> 
  );
}

export default App;
