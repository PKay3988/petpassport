import React, { useEffect, useState } from "react";
import AddVet from "./AddVet";
import MapView from "./MapView";
import Nav from "./Nav";

function Vets() {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        fetch('/vets')
            .then(result => result.json())
            .then(vets => setVets(vets))
            .catch(err => console.log(err.message))
    }, []);

    function submitVet(newVet) {
        console.log(newVet)
        fetch('/vets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( newVet )
        })
            .then(result => result.json())
            .then(vets => setVets(vets))
            .catch(err => console.log(err.message))
    }

    return (
        <div className="vets-container">
            <Nav/>
            <h3>my vets</h3>
            <div className="vet-cards">
                {/* {vets && 
                vets.findIndex(vet => vet.id === props.pet.vet_id)
                } */}
                <div className="card" key="card">
                {vets && vets.map(vet => (
                    <div>
                        <span>{vet.name}</span>
                        <span>{vet.street_name}, {vet.street_number}, {vet.city}</span>
                        <span>{vet.phone_number}</span>
                    </div>
                ))}
                    <button className="btn">add primary vet</button>
                </div>
                <a className="card">treatment</a>
            </div>
            <AddVet onSubmit={(newVet) => submitVet(newVet)} />
            <MapView />
        </div>
    )
}

export default Vets 