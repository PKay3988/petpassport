import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRoutes from "./ReactRoutes";
import Vets from "./components/Vets";
import Nav from "./components/Nav";
import RegisterUser from "./components/RegisterUser";

// import { BrowserRouter as Switch, Router, Route, Link, useHistory } from 'react-router-dom';
// import { Switch } from 'react-router';

function App() {
  return (

     <Router> 

          <div className="App">
               <h1> Pet Passport </h1>
                    {/* <Nav /> */}
                    <ReactRoutes /> 
          </div>
        
     </Router> 
  );
}

export default App;