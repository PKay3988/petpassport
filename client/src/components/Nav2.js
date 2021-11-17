import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import DisplayProfile from "./DisplayProfile";
import './Nav2.css';
import Hardimg from "./Hardimg.jpeg";
// import img from "./img.jpeg" 

const Nav2 = (props) => {
    const [pet, setPet] = useState(props.pet);
    // let pet = props.pet;
console.log("Nav", props);
console.log("Nav", JSON.stringify(props.pet));


    const signout = () => {
        localStorage.clear("token");
        console.log("Bye!");
      };

    useEffect(() => {
        setPet(pet);
    }, [])
    
    return (
            <div className="navbar navbar-expand-md fixed-left">
            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav">
                    
                    <div className="prof-pic-hard-div">

                        <img src= {Hardimg} />
                    </div>

                   
                    <br /><br /><br /><br />
                    <h3> Pet Passport 🐾 </h3> 

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

                    <Link to="/Wellness"><li>WELLNESS</li>
                    </Link>

                    <Link to="/" className="logout">
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

export default Nav2;
