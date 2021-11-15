import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DisplayProfile from "./DisplayProfile";

function AddPet(props) {
  const emptyPet = {
    pet_name: "",
    breed: "",
    dob: "",
    user_id: `${props.id}`,
    vet_id: "",
  };

  const [pet, setPet] = useState(emptyPet);

  function handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setPet((state) => ({
      ...state,
      [name]: value,
    }));
  }

  const addPet = () => {
    props.onSubmit(pet);
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <div>
      <Modal show={true} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create new pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addvet-form" onSubmit={addPet}>
            <label className="addvet-item"> Name
              <input
                type="text"
                name="pet_name"
                value={pet.pet_name}
                onChange={handleChange}
              />
            </label>
            <label className="addvet-item">
              Breed
              <input
                type="text"
                name="breed"
                value={pet.breed}
                onChange={handleChange}
              />
            </label>
            <label className="addvet-item">
              Date of birth
              <input
                type="date"
                name="dob"
                value={pet.dob}
                onChange={handleChange}
              />
            </label>
            <br />

            <button> Add Photo: 
              </button>
          
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addPet}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddPet;
