import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRoutes from "./ReactRoutes";
import Vets from "./components/Vets";
import Nav2 from "./components/Nav2";
import RegisterUser from "./components/RegisterUser";

// import { BrowserRouter as Switch, Router, Route, Link, useHistory } from 'react-router-dom';
// import { Switch } from 'react-router';

function App(props) {
     const [pet, setPet] = useState(props.pet);
  return (
       <div>

{/* <p>Yo!</p> */}

     <Router> 
          {/* <Nav2 pet={pet}/> */}

          <div className="App">
               <h1> Pet Passport </h1>
                    
                    <ReactRoutes /> 
          </div>
        
     </Router> 
     </div>
  );
}

export default App;
