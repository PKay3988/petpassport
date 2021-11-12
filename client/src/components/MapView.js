import React, { useEffect, useState  } from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './Vets.css';

// leaflet/dist/images/marker-icon.png
import icon from '../assets/icon-2.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapView = (props) => {
    // when we connect components - send user info to fetch their coords
    // - add marker to home & center map

    // useEffect(() => {
        
    // }, [])

    let homeIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 40]
    });

    L.Marker.prototype.options.icon = homeIcon;

    let vetCoords = null;
    if(props.vets[0]) {vetCoords = props.vets[0].coords};

    let homeCoords = null;
    if(props.user) { homeCoords = props.user.coords };

    let center = [ 55.53813 , -0.22522 ];
    if(homeCoords) { center = homeCoords.split(",").reverse()} 

    return (
        <MapContainer  center={ center } zoom={13}>
            <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            {vetCoords ? 
            <Marker position={vetCoords.split(",").reverse()}>
                <Popup>
                    {props.vets[0].name} <br />
                    {props.vets[0].phone_number}
                </Popup>
            </Marker>
            : null}
            {homeCoords ? 
            <Marker position={homeCoords.split(",").reverse()}>
                <Popup>
                    HOME
                </Popup>
            </Marker>
            : null}
        </MapContainer>
    )
}


export default MapView;