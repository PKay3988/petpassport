import React, { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import AddPet from "./AddPet";

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
  }, [pets]);

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
    useEffect(() => {
        getPets();
    });


    return (
        <div>
            <h1>Choose a pet</h1>

            <ul>
            {pets.length > 0 && pets.map((i) => 
            <li className="button-list" key={i.id} onClick={() => onSelectPet(i.id)}>
               {i.pet_name}
            </li>)}
          </ul>

            <div>
            
      </div>
      <button className="btn btn-success">Add a new pet</button>
            
      {/* <div>
            <Modal 
            show={true}
            onHide={handleClose}
            size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Add a pet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="addvet-form" onSubmit={addPet}>
                        <label className="addvet-item"> Name
                            <input 
                            type="text"
                            name="name" 
                            value={pet.name}
                            onChange={handleChange} />
                        </label>
                        <label className="addvet-item"> DOB
                            <div>
                                <input 
                                type="text"
                                name="dob" 
                                value={pet.dob}
                                onChange={handleChange}/>
                                <input
                                id="number"
                                type="text"
                                name="dob"
                                value={pet.dob}
                                onChange={handleChange} />
                            </div>
                        </label>
                        
                        <br />
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
        </div> */}
</div> 

<<<<<<< HEAD
    )
=======
  return (
    <div>
      <h1>Choose a pet</h1>

      <ul>
        {pets &&
          pets.map((pet) => (
            <li key={pet.id}>
              <Link to="/Dashboard" onClick={() => onChoose(pet)}>
                <button >{pet.pet_name}</button>
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
>>>>>>> c486eb993b324b22e6851f8d3408040c989bdd83
};

export default ChoosePet;
