import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DisplayProfile from "./DisplayProfile";
import imgg from "./imgg.jpeg"

function AddPet(props) {
  const emptyPet = {
    pet_name: "",
    type:"",
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
      <Modal  portalClassName="modal" show={true} onHide={handleClose} size="lg">
        <Modal.Header className="modal-body" closeButton>
          
          <Modal.Title className="modal-body">Create new pet</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="addvet-form" onSubmit={addPet}>
            <label className="addvet-item"> 
              <input
                type="text"
                name="pet_name"
                value={pet.pet_name}
                onChange={handleChange}
                placeholder="Name"
              />
            </label>
            <label className="addvet-item">
             
              <input
                type="text"
                name="type"
                value={pet.type}
                onChange={handleChange}
                placeholder="Type"
              />
            </label>

            <label className="addvet-item">
           
              <input
                type="text"
                name="breed"
                value={pet.breed}
                onChange={handleChange}
                placeholder="Breed"
              />
            </label>
            <div className="add-prof-pic-holder">

            {/* <DisplayProfile immg={imgg} pet={pet} /> */}

            </div>

<label className="addvet-item" id="dob">
              Date of birth
              <input
                type="date"
                name="dob"
                value={pet.dob}
                onChange={handleChange}
              />
            </label>
            <br />

            {/* <button> Add Photo: 
              </button> */}
          
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="close-button" onClick={handleClose}>
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

