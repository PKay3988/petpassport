import React, { useEffect, useState} from "react";
import './App.css';
import Dashboard from './components/Dashboard';
import ChoosePet from './components/ChoosePet';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';


function App() {
  return (

    <Router> 
    <div className="App">
     <h1> pet passport </h1>

     <Link to="/login">Login</Link>
     

    <button>
    <Link to="/choosepet">Login Successful</Link>
      </button>
     <Dashboard />
     <Login />
    </div>


    <Switch>
      
    <Route path ="/" exact></Route>

    <Route path ="/AddPet" ></Route>

    <Route path ="/AddPhoto" ></Route>

    <Route path ="/ChoosePet" ></Route>
    <ChoosePet />

    <Route path ="/Dashboard" ></Route>

    <Route path ="/DisplayProfile" ></Route>

    <Route path ="/Login" ></Route>
    <Login />

    <Route path ="/Nav" ></Route>

    <Route path ="/PhotoGallery" ></Route>

    </Switch>
        
    </Router> 
  );
}

export default App;
