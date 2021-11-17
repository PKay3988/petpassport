import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import DisplayProfile from "./DisplayProfile";
import './Vets.css';
import imgg from "./imgg.jpeg" 

const Nav = (props) => {
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
                    {/* <h3> Pet Passport 🐾 </h3> */}
                    <div className="prof-pic-holder">

                    <DisplayProfile pet={pet} />
                    <div className="pet-info"
                    ><h3>{pet.pet_name}🐾 </h3>
                    <ul>
                        <li>
                            <label>Breed:</label>
                            <p>{pet.breed}</p>
                        </li>
                        <li>
                            <label>Date of Birth:</label>
                            <p>{pet.dob}</p>
                        </li>
                    </ul>
                    </div>

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

                    <Link to="/DisplayProfile"><li>DISPPROF</li>
                    </Link>

                    <br />

                    <Link to="/">
                        <button type="button-logout" onClick={signout}>
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