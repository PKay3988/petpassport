import React, { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import AddPet from "./AddPet";
import "./DisplayProfile.css";
import DisplayProfile from "./DisplayProfile";
import imgg from "./imgg.jpeg"

export const ChoosePet = (props) => {
  // if sending user through routes doesn't work
  let user = props.user;

  const [show, setShow] = useState(false);

  //functions to open - close the modal with addvet component
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // gets user in props - fetch pets with that id as user_id
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`/pets/pets/${user.id}`)
      .then((result) => result.json())
      .then((pets) => setPets(pets))
      .catch((err) => console.log(err.message));
  }, []);

  function onChoose(pet) {
    props.sendPet(pet);
  }

  function submitPet(newPet) {
    fetch("/pets/AddPet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((result) => result.json())
      .then((pets) => setPets(pets))
      .catch((err) => console.log(err.message));
    handleClose();
  }

  return (
    <div>
      <h1>Choose a pet</h1>

      <ul className="pets-list">
        {pets &&
          pets.map((pet) => (
            <li key={pet.id}>
              <Link to="/Dashboard" onClick={() => onChoose(pet)}>
                <button key={pet.id}>{pet.pet_name}</button>
              </Link>
            </li>
          ))}
      </ul>

      <button onClick={handleShow}>Add a pet</button>
      <button>delete a pet</button>

      {show ? (
        <AddPet
          onSubmit={(newPet) => submitPet(newPet)}
          onClose={handleClose}
          id={user.id}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default ChoosePet;
