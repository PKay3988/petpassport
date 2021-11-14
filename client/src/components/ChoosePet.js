import React, { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export const ChoosePet = () => {

  // if sending user through routes doesn't work 
  let [user, setUser] = useState({});

  // useEffect(() => {
  //   setUser(props.user);
  // }, []);

  // gets user in props - fetch pets with that id as user_id


  function onChoose() {
    // props.sendPet(pet.id);
    // props.sendUser(user);
  }

  return (
    <div>
      <h1>Choose a pet</h1>

      <Nav />

      {/* map pets - render a link for ever one of them (to dashboard) */}
      <ul>
        <li > 
            <Link to="/Dashboard" onClick={() => onChoose()}> Butterscotch </Link>
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
