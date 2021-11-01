import React, { useEffect, useState} from "react";
import './App.css';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function App() {
  return (

    <Router> 
    <div className="App">
     <h1> pet passport </h1>
     <Dashboard />
    </div>

    </Router> 
  );
}

export default App;
