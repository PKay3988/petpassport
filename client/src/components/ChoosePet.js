<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ChoosePet = () => {

    const [pets, setPets] = useState([]); 
    const [show, setShow] = useState(false);
    // const [pet, setPet] = useState( emptyVet );

    const getPets = () => {
        // console.log('hi')
          fetch("/pets")
            .then((response) => response.json())
            .then(json => {
              // console.log(json);
              setPets(json);
            })
            .catch((error) => {
              console.log(error);
            });
        };

    const onSelectPet = (id) => {
        console.log(id)
        //need to add link to pet Id profile / dashboard
    }
    
    const emptyVet = {
      name: "",
      dob: "",
      user_id: 1
  };

    const addPet = () => {
    // props.onSubmit(vet);
}
    const handleClose = () => {
    setShow(false);
}

    function handleChange(e) {
      e.preventDefault();
      const name = e.target.name;
      const value = e.target.value;

      // adds that code to vet object 
    //   setPet((state) => ({
    //       ...state,
    //       [name]: value,
    //   }));
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



=======
import React, { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

export const ChoosePet = () => {

  // if sending user through routes doesn't work 
  let [user, setUser] = useState({});

  // useEffect(() => {
  //   setUser(props.user);
  // }, []);

  // gets user in props - fetch pets with that id as user_id
>>>>>>> b5e1bb5f4a8dafc11c8c30f32a933bc18b195055


  function onChoose() {
    // props.sendPet(pet.id);
    // props.sendUser(user);
  }

  return (
    <div>
      <h1>Choose a pet</h1>

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
