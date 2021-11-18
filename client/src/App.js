import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRoutes from "./ReactRoutes";


function App(props) {
     const [pet, setPet] = useState(props.pet);
     
  return (
       <div>


     <Router> 

          <div className="App">
               <ReactRoutes /> 
          </div>
        
     </Router> 
     </div>
  );
}

export default App;