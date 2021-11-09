import React from "react";
import { Link } from "react-router-dom";

export const ChoosePet = () => {
  return (
    <div>
      <h1>Choose a pet</h1>

      <ul>
        <li> 
            <Link to="/Dashboard"> Butterscotch </Link>
        </li>
        <li> Mr Peanut</li>
      </ul>

      <button>
        <Link to="/AddPet">add a pet</Link>
      </button>
      <button>delete a pet</button>
    </div>
  );
};

export default ChoosePet;
