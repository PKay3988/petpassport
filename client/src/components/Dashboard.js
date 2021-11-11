import React, { useState, useEffect } from 'react';
import MapView from './MapView';
import Nav from './Nav';
import "./Dashboard.css";

export const Dashboard = () => {
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
    const [vets, setVets] = useState([]);

    useEffect(() => {
        fetch('/vets')
            .then(result => result.json())
            .then(vets => setVets(vets))
            .catch(err => console.log(err.message))
    }, []);

    return (
        <div>
            <Nav />

            <div className="dashboard-container">
                <div className="dash-item">
                    important events
                </div>

                <div className="dash-item midsection">
                    <div>
                        <span>photo gallery</span>
                    </div>
                    <div>
                        <span>appointments</span>
                    </div>
                </div>

                <div className="dash-item">
                    <MapView vets={vets} />
                </div>
            </div>

        </div>
        
    )
}

export default Dashboard;
