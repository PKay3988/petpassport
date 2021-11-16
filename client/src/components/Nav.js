import React, { useState} from "react";
import { Link } from "react-router-dom";
import DisplayProfile from "./DisplayProfile";
import './Vets.css';
import imgg from "./imgg.jpeg" 

const Nav = (props) => {
    const [pet, setPet] = useState(props.pet);
    
    return (
            <div className="navbar navbar-expand-md fixed-left">
            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav">
                    <h3> Pet Passport 🐾 </h3>
                    <div>

                    {/* <DisplayProfile/> */}
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

                    <Link to="/DisplayProfile"><li>PROFPIC</li>
                    </Link>

                    {/* <Link to="/"><li>LOGIN</li>
                    </Link> */}

                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
