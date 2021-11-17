<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import countryList from 'react-select-country-list';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
=======
import React, { useState} from "react";
import getValue from 'react-select-country-list';
import countryList from 'react-select-country-list'
>>>>>>> 9cd906e (add vet + country code working)

function AddVet(props) {
    const emptyVet = {
        name: "",
        street_name: "",
        street_number: "",
<<<<<<< HEAD
=======
        postal_code: "",
>>>>>>> 9cd906e (add vet + country code working)
        city: "",
        country: "",
        country_code: "",
        phone_number: "",
<<<<<<< HEAD
        user_id: `${props.id}`
=======
        user_id: 1
>>>>>>> 9cd906e (add vet + country code working)
    };
    const [vet, setVet] = useState( emptyVet );

    function handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        // gets country code with method from react-select-countries 
        let country_code = countryList().getValue(vet.country);
<<<<<<< HEAD
=======
        console.log(country_code);
>>>>>>> 9cd906e (add vet + country code working)

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
<<<<<<< HEAD
    }

    const handleClose = () => {
        props.onClose();
=======
>>>>>>> 9cd906e (add vet + country code working)
    }

    return (
        <div>
<<<<<<< HEAD
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
                        <label className="addvet-item"> City
                            <input 
                            type="text"
                            name="city" 
                            value={vet.city}
                            onChange={handleChange}/>
                        </label>
                        <select className="select-form" name="country" value={vet.country} onChange={handleChange}>
                            <option>Choose a country...</option>
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
                        <label>test
                            <input 
                            type="time" />
                        </label>
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
=======
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
                <label className="addvet-item"> Country
                    <input 
                    type="text"
                    name="country" 
                    value={vet.country}
                    onChange={handleChange}/>
                </label>
                <label className="addvet-item"> Phone number
                    <input 
                    type="text"
                    name="phone_number" 
                    value={vet.phone_number}
                    onChange={handleChange}/>
                </label>
                <br />
                <button className="btn" onClick={addVet}>Add vet</button>
            </div>
>>>>>>> 9cd906e (add vet + country code working)
        </div>
    )
}


export default AddVet;
