import React, { useEffect, useState } from "react";
import AddVet from "./AddVet";
import MapView from "./MapView";
import Nav2 from "./Nav2";
import Nav from "./Nav";
import countryList from 'react-select-country-list';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Vets(props) {
    const [vets, setVets] = useState([]);
    const [userVet, setUserVet] = useState([]);

    const [show, setShow] = useState(false);

    const [input, setInput] = useState(false);

    const [appointment, setAppointment] = useState({
        day: "",
        time: ""
    });

    const handleAppointment = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;

        setAppointment((state) => ({
            ...state,
            [name]: value,
        }));
    }

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
    }, [vets]);

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

    // add the date of the new appointment to vets db
    function addAppointment() {
        fetch(`/vets/app/${userVet[0].id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment),
        })
            .then(result => result.json())
            .then(vet => setUserVet(vet))
            .catch(err => console.log(err.message))
        
            setInput(false);
    }
    
    return (
        <div className="vets-container">

            <div>
            <Nav/>
            <div className="vet-view">
            <h3>my vets</h3>
            <div className="vet-cards">
                <div className="card" key="card"> Primary vet:
                    {userVet.length > 0 ? <div className="card-content">
                        <span>{userVet[0].name}</span>
                        <span>{userVet[0].street_name}, {userVet[0].street_number}</span>
                        <span>{userVet[0].city}</span>
                        <span>{userVet[0].phone_number}</span>
                    </div> : <div></div>}
                    <button className="btn" onClick={handleShow}>add primary vet</button>
                </div>
                <div className="card">
                    Next appointment: <br />
                    {userVet.length > 0 ? userVet[0].appointment : <div></div>}
                    {input && 
                    <div>
                        <Modal show={input} onHide={() => setInput(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Select new date and time for the vet appointment:</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <label>
                                <input name="day" value={appointment.day} type="date" onChange={handleAppointment}/>
                                <input name="time" value={appointment.time} type="time" onChange={handleAppointment} />
                            </label>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setInput(false)}>
                                Close
                                </Button>
                                <Button variant="primary" onClick={addAppointment}>
                                Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>}
                    <button className="btn" onClick={() => setInput(true)}>add vet appointment</button>
                </div>

                {/* TODO - if there is already a vet with user id - render addvet with previous info & make it call a put request instead of post */}
                {show? <AddVet onSubmit={(newVet) => submitVet(newVet)} onClose={handleClose} countries={countries} id={user.id}/> : <div />}
                
            </div>

            {/* right now sends browser position + all the vets (when we can have just 1 stored, send that one) */}
            <MapView userVet={userVet} user={user}/>
        </div>
        </div>
        </div>
    )
}

export default Vets;