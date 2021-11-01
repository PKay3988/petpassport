import React, { useEffect, useState} from "react";
import './App.css';
import Dashboard from './components/Dashboard';
import ChoosePet from './components/ChoosePet';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
// import  Login from'./Component/Login';

function App() {
  return (

    <Router> 
    <div className="App">
     <h1> pet passport </h1>

    <button>
    <Link to="/choosepet">Login Successful</Link>
      </button>
     <Dashboard />
    </div>


    <Switch>
          <Route path="/choosepet">
            <ChoosePet />
          </Route>
        </Switch>
    </Router> 
  );
}

export default App;
