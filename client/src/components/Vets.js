import React, { useEffect, useState } from "react";
import AddVet from "./AddVet";
import MapView from "./MapView";
import Nav from "./Nav";

function Vets() {
    const [vets, setVets] = useState([]);
    // const [userVet, setUserVet] = useState();

    const [show, setShow] = useState(false);

    //functions to open - close the modal with addvet component
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //get array of all the vets
    useEffect(() => {
        fetch('/vets')
            .then(result => result.json())
            .then(vets => setVets(vets))
            .catch(err => console.log(err.message))
            // .then(res => res.text())
            // .then(text => console.log(text))
    }, []);

    //when we connect components - pass user id as props and get the specific vet associated to it
    // useEffect(() => {
    //     fetch(`/vets/${props.id}`) 
    //         .then(result => result.json())
    //         .then(vet => setUserVet(vet))
    //         .catch(err => console.log(err.message))
    // });

    //add new vet to db & closes the modal
    function submitVet(newVet) {
        // console.log(newVet);
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
    
    return (
        <div className="vets-container">
            <Nav/>
            <h3>my vets</h3>
            <div className="vet-cards">
                {/* when we can fetch by user id - find index of the vet
                {vets && 
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

                {/* TODO - if there is already a vet with user id - render addvet with previous info & make it call a put request instead of post */}
                {show? <AddVet onSubmit={(newVet) => submitVet(newVet)} onClose={handleClose}/> : <div />}
                
            </div>

            {/* right now sends browser position + all the vets (when we can have just 1 stored, send that one) */}
            <MapView vets={vets}/>
        </div>
    )
}

export default Vets 