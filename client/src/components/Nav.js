import React, { useState} from "react";
import { Link } from "react-router-dom";
import './Vets.css';

const Nav = () => {
    
    return (
        <nav>
            <div className="navbar navbar-expand-md fixed-left">
            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav">
                    <h3> Pet Passport 🐾 </h3>
                    <div className="nav-item">

                    <Link to="/"><li>HOME</li> 
                    </Link>
             
                    <Link to="/RegisterUser"><li>REGISTER</li> 
                    </Link>
                    
                    <Link to="/AddPets"><li>PETS</li>
                     </Link>
                    
                    <Link to="/Vets"><li>VETS</li>
                    </Link>

                    <Link to="/PhotoGallery"><li>GALLERY</li>
                    </Link>

                    <Link to="/AddPhoto"><li>ADD PHOTOS</li>
                    </Link>

                    </div>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav;
