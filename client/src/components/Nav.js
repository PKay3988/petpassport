import React, { useState} from "react";
import { Link } from "react-router-dom";
import DisplayProfile from "./DisplayProfile";
import './Vets.css';
import imgg from "./imgg.jpeg" 

const Nav = (props) => {

    const signout = () => {
        localStorage.clear("token");
        console.log("Bye!");
      };
    
    return (
            <div className="navbar navbar-expand-md fixed-left">
            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav">
                    <h3> Pet Passport 🐾 </h3>
                    <div className="prof-pic-holder">

                    <DisplayProfile   />

                    </div>

                    <div className="nav-item">
                        {/* <DisplayProfile /> */}

                    <Link to="/Dashboard"><li>HOME</li> 
                    </Link>
             
                    {/* <Link to="/RegisterUser"><li>REGISTER</li> 
                    </Link> */}
                    
                    <Link to="/ChoosePet"><li>PETS</li>
                     </Link>

                    {/* <Link to="/AddPet"><li>Add PET</li>
                     </Link> */}
                    
                    <Link to="/Vets"><li>VETS</li>
                    </Link>

                    <Link to="/PhotoGallery"><li>GALLERY</li>
                    </Link>

                    <Link to="/AddPhoto"><li>ADD PHOTOS</li>
                    </Link>

                    <Link to="/">
                        <button type="button" onClick={signout}>
                            Log out
                        </button>
                    </Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
