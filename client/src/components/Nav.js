import React, { useState} from "react";
import { Link } from "react-router-dom";
import './Vets.css';

import homeSolidIcon from '../assets/home-solid.svg';

const Nav = () => {
    
    return (

        <div className="navbar navbar-expand-md fixed-left">
            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav">
                    {/* <h3> Pet Passport 🐾 </h3> */}
                    <div className="nav-item">

                    <Link to="/Dashboard"><li> Home</li> </Link>
                    <Link to="/ChoosePet"><li>Pets</li></Link>
                    <Link to="/Vets"><li>Vet</li></Link>
                    <Link to="/AddPhoto"><li>Add Photos</li></Link>
             
                    </div>
                </ul>
               

                    {/* <Link to="/RegisterUser"><li>REGISTER</li> 
                    </Link> */}
                    {/* <Link to="/PhotoGallery"><li>GALLERY</li>
                    </Link> */}
                    {/* <Link to="/"><li>LOGIN</li>
                    </Link> */}

                  
            </div>
        </div>
        
    )
}

export default Nav;
