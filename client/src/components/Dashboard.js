import React, { useState, useEffect } from 'react';
import MapView from './MapView';
import Nav from './Nav';
import PhotoGallery from './PhotoGallery';
import "./Dashboard.css";
// import PhotoGallery from './PhotoGallery';

export const Dashboard = (props) => {
    // // stores coords from browser position
    // const [position, setPosition] = useState();

    // //gets coord of current location from the browser
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //         function(position) {
    //             setPosition([position.coords.latitude, position.coords.longitude]);
    //         }, 
    //         function(error) {
    //             console.log(error)
    //         }, 
    //         { enableHighAccuracy: true })
    // }, [])

    // gets list of vets 
    const [userVet, setUserVet] = useState([]);

    // pass user id as props and get the specific vet associated to it
    useEffect(() => {
        fetch(`/vets/vet/${user.id}`) 
            .then(result => result.json())
            .then(vet => setUserVet(vet))
            .catch(err => console.log(err.message))
    }, []);

    let user = props.user;

    return (
        <div>
            <Nav />

            <div className="dashboard-container">
                
                <div className="dash-item midsection">
                    <PhotoGallery />
                    <div>
                        <span>appointments</span>
                    </div>
                </div>

                <div className="dash-item">
                    <MapView userVet={userVet} user={user}/>
                </div>
            </div>

        </div>
        
    )
}

export default Dashboard;
