import React, { useEffect, useState} from "react";
import './App.css';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
// import  Login from'./Component/Login';
import MapView from './components/MapView';

function App() {
  return (

    <Router> 
    <div className="App">
     <h1> pet passport </h1>
     <Dashboard />
     <MapView />
    </div>

    </Router> 
  );
}

export default App;
