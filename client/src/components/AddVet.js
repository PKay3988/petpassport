import React, { useEffect, useState } from "react";
import countryList from 'react-select-country-list';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "@restart/ui/esm/Dropdown";

function AddVet(props) {
    const emptyVet = {
        name: "",
        street_name: "",
        street_number: "",
        postal_code: "",
        city: "",
        country: "",
        country_code: "",
        phone_number: "",
        user_id: 1
    };
    const [vet, setVet] = useState( emptyVet );

    function handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        // gets country code with method from react-select-countries 
        let country_code = countryList().getValue(vet.country);

        // adds that code to vet object 
        setVet((state) => ({
            ...state,
            [name]: value,
            "country_code": country_code
        }));
    }

    const addVet = () => {
        props.onSubmit(vet);
        // setVet(emptyVet);
    }

    const handleClose = () => {
        props.onClose();
    }

    return (
        <div>
            <Modal 
            show={true}
            onHide={handleClose}
            size="lg">
                <Modal.Header closeButton>
                <Modal.Title>primary vet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="addvet-form" onSubmit={addVet}>
                        <label className="addvet-item"> Name
                            <input 
                            type="text"
                            name="name" 
                            value={vet.name}
                            onChange={handleChange} />
                        </label>
                        <label className="addvet-item"> Street name and number
                            <div>
                                <input 
                                type="text"
                                name="street_name" 
                                value={vet.street_name}
                                onChange={handleChange}/>
                                <input
                                id="number"
                                type="number"
                                name="street_number"
                                value={vet.street_number}
                                onChange={handleChange} />
                            </div>
                        </label>
                        <label className="addvet-item"> Postal code
                            <input 
                            type="text"
                            name="postal_code" 
                            value={vet.postal_code}
                            onChange={handleChange}/>
                        </label>
                        <label className="addvet-item"> City
                            <input 
                            type="text"
                            name="city" 
                            value={vet.city}
                            onChange={handleChange}/>
                        </label>
                        <select className="select-form" name="country" value={vet.country} onChange={handleChange}>
                            {props.countries.map(country => (
                                <option key={country}>{country}</option>
                            ))}
                        </select>
                        <label className="addvet-item"> Phone number
                            <input 
                            type="text"
                            name="phone_number" 
                            value={vet.phone_number}
                            onChange={handleChange}/>
                        </label>
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addVet}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default AddVet;

