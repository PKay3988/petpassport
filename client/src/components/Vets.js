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

    return (
        <div className="vets-container">
            <Nav/>
            <div>
                {vets && 
                vets.map(vet => (
                    <li>
                        <span>{vet.name}</span>
                    </li>
                ))}
            </div>
            <AddVet />
            <MapView />
        </div>
    )
}

export default Vets 