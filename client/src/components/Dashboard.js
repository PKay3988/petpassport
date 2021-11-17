import React, { useState, useEffect } from 'react';
import MapView from './MapView';
import Nav from './Nav';
import PhotoGallery from './PhotoGallery';
import AddPhoto from './AddPhoto';
import Events from './Events';
import "./Dashboard.css";

export const Dashboard = (props) => {
    let pet = props.pet;
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

            {/* <div className="dashboard-view">
            
            <div className="dash-center">
                <Nav />

            <div className="dashboard-container">
                 <div className="appointment-card">
                    <span>appointments</span>
                    </div>
                    <div className="photo-card">
                        <h3>Gallery</h3>
                    <PhotoGallery />
                </div>  */}
            <Nav pet={pet}/>
            <p>Hello</p>
            <div className="dashboard-container">
                
                <div className="dash-item midsection">
                    <PhotoGallery pet={pet} />
                    {/* <AddPhoto/> */}
                    <div>
                        <Events user={user}/>
                    </div>
                </div>
                <Nav pet={pet}/>
                <div className="dash-item">
                    <h3>Places of Interest</h3>
                    <MapView className="map" userVet={userVet} user={user}/>
                </div>
                </div>
            </div>
         
        
    )
}

export default Dashboard;
