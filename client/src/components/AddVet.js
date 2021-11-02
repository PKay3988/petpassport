import React, { useState} from "react";
import getValue from 'react-select-country-list';

function AddVet() {
    const emptyVet = {
        name: "",
        street_name: "",
        postal_code: "",
        city: "",
        country: "",
        country_code: "",
        phone_number: "",
        pet_id: props.pet_id,
        user_id: props.user_id
    };
    const [vet, setVet] = useState( emptyVet );

    function handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setVet((state) => ({
            ...state,
            [name]: value
        }));

        // gets country code with method from react-select-countries 
        let country_code = getValue(vet.country);

        // adds that code to vet object 
        setVet((state) => ({
            ...state,
            [country_code]: country_code
        }))
    }

    return (
        <div>
            <div>
                <label> Name
                    <input 
                    type="text"
                    name="name" 
                    value={vet.name}
                    onChange={handleChange} />
                </label>
                <label> Street name
                    <input 
                    type="text"
                    name="street_name" 
                    value={vet.street_name}
                    onChange={handleChange}/>
                </label>
                <label> Postal code
                    <input 
                    type="text"
                    name="postal_code" 
                    value={vet.postal_code}
                    onChange={handleChange}/>
                </label>
                <label> City
                    <input 
                    type="text"
                    name="city" 
                    value={vet.city}
                    onChange={handleChange}/>
                </label>
                <label> Country
                    <input 
                    type="text"
                    name="country" 
                    value={vet.country}
                    onChange={handleChange}/>
                </label>
                <label> Phone number
                    <input 
                    type="text"
                    name="phone_number" 
                    value={vet.phone_number}
                    onChange={handleChange}/>
                </label>
            </div>
        </div>
    )
}


export default AddVet;
