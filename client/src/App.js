import React, { useEffect, useState, useParams } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ChoosePet from "./components/ChoosePet";
import Login from "./components/Login";
import Events from "./components/Events";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactRoutes from "./ReactRoutes";

// import { BrowserRouter as Switch, Router, Route, Link, useHistory } from 'react-router-dom';
// import { Switch } from 'react-router';

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Pet Passport 🐾 </h1>

        <Login />

        {/* <Link to={`/login`} >
       <button>Login here</button>
       </Link> */}
        {/* <ReactRoutes/ > */}
      </div>
    </Router>
  );
}

export default App;
