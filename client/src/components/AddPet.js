import React, { useState} from "react";
import countryList from 'react-select-country-list';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddPet(props) {
    const emptyVet = {
        name: "",
        dob: "",
        user_id: 1
    };


    const [pet, setPet] = useState( emptyVet );
    const [show, setShow] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        // adds that code to vet object 
        setPet((state) => ({
            ...state,
            [name]: value,
        }));
    }

    const addPet = () => {
        // props.onSubmit(vet);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div>
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
        </div>
    )
}


export default AddPet;

