import React, { useEffect, useState } from "react";
import AddVet from "./AddVet";
import MapView from "./MapView";
import Nav from "./Nav";

function Vets() {
    const [vets, setVets] = useState([]);
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [map, setMap] = useState(false);

    useEffect(() => {
        fetch('/vets')
            .then(result => result.json())
            .then(vets => setVets(vets))
            .catch(err => console.log(err.message))
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setPosition([position.coords.latitude, position.coords.longitude]);
            }, 
            function(error) {
                console.log(error)
            }, 
            { enableHighAccuracy: true })
    }, [])

    function submitVet(newVet) {
        console.log(newVet);
        fetch('/vets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( newVet )
        })
            .then(result => result.json())
            .then(vets => setVets(vets))
            .catch(err => console.log(err.message));
        handleClose();
    }

    function showMap() {
        setMap(!map);
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
                    <div className="card-content" key={vet.id}>
                        <span>{vet.name}</span>
                        <span>{vet.street_name}, {vet.street_number}</span>
                        <span>{vet.city}</span>
                        <span>{vet.phone_number}</span>
                    </div>
                ))}
                    <button className="btn" onClick={handleShow}>add primary vet</button>
                </div>
                <a className="card">treatment</a>

            {show? <AddVet onSubmit={(newVet) => submitVet(newVet)} onClose={handleClose}/> : <div />}
                
            </div>
            <button onClick={showMap} >show map</button>
            {map ? <MapView position={position}/> : <div></div>}
        </div>
    )
}

export default Vets 