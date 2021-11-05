import React, { useState} from "react";
import getValue from 'react-select-country-list';
import countryList from 'react-select-country-list'

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
        console.log(country_code);

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

    return (
        <div>
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
        </div>
    )
}


export default AddVet;
