import React, { useEffect, useState } from "react";
import AddVet from "./AddVet";
import MapView from "./MapView";
import Nav from "./Nav";
import countryList from 'react-select-country-list';

function Vets(props) {
    const [vets, setVets] = useState([]);
    const [userVet, setUserVet] = useState([]);

    const [show, setShow] = useState(false);

    //functions to open - close the modal with addvet component
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [countries, setCountries] = useState();

    useEffect(() => {
        setCountries(countryList().getLabels());
    }, [])

    //get array of all the vets
    useEffect(() => {
        fetch('/vets')
            .then(result => result.json())
            .then(vets => setVets(vets))
            .catch(err => console.log(err.message))
            // .then(res => res.text())
            // .then(text => console.log(text))
    }, []);

    let user = props.user;

    // pass user id as props and get the specific vet associated to it
    useEffect(() => {
        fetch(`/vets/vet/${user.id}`) 
            .then(result => result.json())
            .then(vet => setUserVet(vet))
            .catch(err => console.log(err.message))
    }, []);

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
                <div className="card" key="card">
                    {userVet.length > 0 ? <div className="card-content">
                        <span>{userVet[0].name}</span>
                        <span>{userVet[0].street_name}, {userVet[0].street_number}</span>
                        <span>{userVet[0].city}</span>
                        <span>{userVet[0].phone_number}</span>
                    </div> : <div></div>}
                    <button className="btn" onClick={handleShow}>add primary vet</button>
                </div>
                <a className="card">treatment</a>

                {/* TODO - if there is already a vet with user id - render addvet with previous info & make it call a put request instead of post */}
                {show? <AddVet onSubmit={(newVet) => submitVet(newVet)} onClose={handleClose} countries={countries} id={user.id}/> : <div />}
                
            </div>

            {/* right now sends browser position + all the vets (when we can have just 1 stored, send that one) */}
            <MapView userVet={userVet} user={user}/>
        </div>
    )
}

export default Vets 